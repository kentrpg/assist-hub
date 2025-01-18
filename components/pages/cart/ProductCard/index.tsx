import Breadcrumb from "@/components/ui/Breadcrumb";
import { Container1164 as Container } from "@/styles/container";
import { ProductList, Title } from "./styled";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import { PeriodProps, rentalPeriodOptions } from "./data";
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

console.error("render Cart");

const Cart = ({ data }: { data: EnhancedCartItem[] }) => {
  // TBD: 點擊 ProductItem 就會重新渲染，需要解決效一直 re-render 的問題

  console.log("Cartdata", data);

  const dispatch = useDispatch();

  const { items: cartItems, activeCartId } = useSelector(
    (state: RootState) => state.cart
  );

  const [isDeletingIds, setIsDeletingIds] = useState<number[]>([]);

  useEffect(() => {
    console.log("Cartdata useEffect");
    dispatch(setCartItems(data));
  }, [data, dispatch]);

  const handleDeleteProduct = async (cartId: number) => {
    setIsDeletingIds((prev) => [...prev, cartId]);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(removeCartItem(cartId));
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setIsDeletingIds((prev) => prev.filter((id) => id !== cartId));
    }
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

    if (!rentalPeriodOptions.includes(period)) {
      console.error(`Invalid rental period: ${period}`);
      return "";
    }

    const date = new Date(startDate);
    const currentDate = date.getDate();
    date.setDate(currentDate + period);

    return date.toISOString().split("T")[0];
  };

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
                cartId={item.cartId}
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
