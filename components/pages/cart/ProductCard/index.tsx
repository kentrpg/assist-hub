import Breadcrumb from "@/components/ui/Breadcrumb";
import { Container1164 as Container } from "@/styles/container";
import { ProductList, Title } from "./styled";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import { PeriodProps } from "./data";
import CartEmpty from "../Empty";
import { CartItem } from "@/components/pages/cart/ProductCard/data";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/utils/redux/store";
import {
  setCartItems,
  updateCartItem,
  removeCartItem,
  setActiveCartId,
} from "@/utils/redux/slices/cart";
import Loading from "@/components/ui/Loading";

const Cart = ({ data }: { data: CartItem[] }) => {
  const dispatch = useDispatch();

  const { items: cartItems, activeCartId, isInitialized } = useSelector(
    (state: RootState) => state.cart
  );

  const [isDeletingIds, setIsDeletingIds] = useState<number[]>([]);

  useEffect(() => {
    dispatch(setCartItems(data));
  }, [data, dispatch]);

  const handleDeleteProduct = async (cartId: number) => {
    setIsDeletingIds((prev) => [...prev, cartId]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(removeCartItem(cartId));
    setIsDeletingIds((prev) => prev.filter((id) => id !== cartId));
  };

  const updateCartItemToServer = async (
    cartId: number,
    updateData: { [key: string]: number | string }
  ) => {
    const res = await fetch("/api/putCarts", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartId,
        ...updateData,
      }),
    });

    const result = await res.json();

    const isSuccess = result.statusCode === 200 && result.status;
    if (!isSuccess) {
      console.error("更新購物車失敗:", result.error);
      alert(result.message || "更新失敗，請稍後再試");
      return false;
    }

    return true;
  };

  const handleQuantityChange = async (id: number, quantity: number) => {
    const targetCartItem = cartItems.find((item) => item.cartId === id);
    if (!targetCartItem) return;

    const newQuantity = targetCartItem.quantity + quantity;
    if (newQuantity < 1) return;

    const isUpdateSuccess = await updateCartItemToServer(id, {
      quantity: newQuantity,
    });

    if (!isUpdateSuccess) return;

    const newAmount =
      targetCartItem.rent * newQuantity * (targetCartItem.period / 30) +
      targetCartItem.deposit;

    dispatch(
      updateCartItem({
        ...targetCartItem,
        quantity: newQuantity,
        amount: newAmount,
      })
    );
  };

  const handleStartDateChange = async (id: number, rentStamp: string) => {
    const targetCartItem = cartItems.find((item) => item.cartId === id);
    if (!targetCartItem) return;

    const isUpdateSuccess = await updateCartItemToServer(id, { rentStamp });
    if (!isUpdateSuccess) return;

    const newEndDate = calculateEndDate(
      rentStamp,
      Number(targetCartItem.period) as PeriodProps
    );

    dispatch(
      updateCartItem({
        ...targetCartItem,
        rentStamp,
        returnStamp: newEndDate,
      })
    );
  };

  const handleRentalPeriodChange = async (id: number, period: PeriodProps) => {
    const targetCartItem = cartItems.find((item) => item.cartId === id);
    if (!targetCartItem) return;

    const isUpdateSuccess = await updateCartItemToServer(id, { period });
    if (!isUpdateSuccess) return;

    const newAmount =
      targetCartItem.rent * targetCartItem.quantity * (period / 30) +
      targetCartItem.deposit;
    const newEndDate = calculateEndDate(targetCartItem.rentStamp, period);

    dispatch(
      updateCartItem({
        ...targetCartItem,
        period,
        amount: newAmount,
        ...(targetCartItem.rentStamp && {
          returnStamp: newEndDate,
        }),
      })
    );
  };

  const calculateEndDate = (startDate: string, period: PeriodProps): string => {
    if (!startDate) return "";

    const date = new Date(startDate);
    const currentDate = date.getDate();
    date.setDate(currentDate + period);

    return date.toISOString().split("T")[0];
  };

  if (!isInitialized) {
    return <Loading />;
  }

  return (
    <Container>
      {cartItems.length > 0 ? (
        <>
          <Breadcrumb />
          <Title>購物車</Title>
          <ProductList>
            {cartItems.map((item) => (
              <ProductItem
                key={item.cartId}
                item={item}
                isDatepickerTarget={false}
                $isActive={activeCartId === item.cartId}
                onClick={() => dispatch(setActiveCartId(item.cartId))}
                onDelete={handleDeleteProduct}
                isDeleting={isDeletingIds.includes(item.cartId)}
                onRentalPeriodChange={(period) =>
                  handleRentalPeriodChange(item.cartId, period)
                }
                onStartDateChange={(date) =>
                  handleStartDateChange(item.cartId, date)
                }
                onQuantityChange={(quantity) =>
                  handleQuantityChange(item.cartId, quantity)
                }
              />
            ))}
          </ProductList>
        </>
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export default Cart;
