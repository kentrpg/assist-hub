import Breadcrumb from "@/components/ui/Breadcrumb";
import { Container1164 as Container } from "@/styles/container";
import { ProductList, Title } from "./styled";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import { PeriodProps } from "./data";
import CartEmpty from "../Empty";
import { EnhancedCartItem } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/utils/redux/store";
import {
  setCartItems,
  updateCartItem,
  removeCartItem,
  setActiveCartId,
} from "@/utils/redux/slices/cart";
import Loading from "@/components/ui/Loading";

const Cart = ({ data }: { data: EnhancedCartItem[] }) => {
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

  const handleRentalPeriodChange = (id: number, period: PeriodProps) => {
    const item = cartItems.find((item) => item.cartId === id);
    if (!item) return;

    const newAmount = item.rent * item.quantity * (period / 30) + item.deposit;
    const newEndDate = calculateEndDate(item.rentStamp, period);

    dispatch(
      updateCartItem({
        ...item,
        period,
        amount: newAmount,
        ...(item.rentStamp && {
          returnStamp: newEndDate,
        }),
      })
    );
  };

  const handleStartDateChange = (id: number, rentStamp: string) => {
    const item = cartItems.find((item) => item.cartId === id);
    if (!item) return;

    const newEndDate = calculateEndDate(
      rentStamp,
      Number(item.period) as PeriodProps
    );

    dispatch(
      updateCartItem({
        ...item,
        rentStamp,
        returnStamp: newEndDate,
      })
    );
  };

  const handleQuantityChange = (id: number, delta: number) => {
    const item = cartItems.find((item) => item.cartId === id);
    if (!item) return;

    const newQuantity = item.quantity + delta;
    if (newQuantity >= 1) {
      const newAmount =
        item.rent * newQuantity * (item.period / 30) + item.deposit;

      dispatch(
        updateCartItem({
          ...item,
          quantity: newQuantity,
          amount: newAmount,
        })
      );
    }
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
                onQuantityChange={(delta) =>
                  handleQuantityChange(item.cartId, delta)
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
