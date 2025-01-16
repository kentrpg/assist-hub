import Breadcrumb from "@/components/ui/Breadcrumb";
import { Container1164 as Container } from "@/styles/container";
import { ProductList, Title } from "./styled";
import ProductItem from "./ProductItem";
import { useState } from "react";
import { PeriodProps, rentalPeriodOptions } from "./data";
import CartEmpty from "../Empty";
import { EnhancedCartItem } from "./data";

console.error("render Cart");

const Cart = ({ data }: { data: EnhancedCartItem[] }) => {
  // TBD: 點擊 ProductItem 就會重新渲染，需要解決效一直 re-render 的問題
  console.log("Cartdata", data);

  const [cartItems, setCartItems] = useState<EnhancedCartItem[]>(data);
  const [activeProductId, setActiveProductId] = useState<number | null>(
    cartItems[0]?.cartId || null,
  );
  const [isDeletingIds, setIsDeletingIds] = useState<number[]>([]);

  const handleDeleteProduct = async (cartId: number) => {
    console.log("handleDeleteProduct", cartId);
    setIsDeletingIds((prev) => [...prev, cartId]);

    try {
      // 實際 API 呼叫
      // await fetch(`/api/cart/${cartId}`, { method: 'DELETE' });
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setIsDeletingIds((prev) => prev.filter((id) => id !== cartId));
      setCartItems((prev) => {
        if (prev.length > 0) {
          setActiveProductId(prev[0].cartId);
        }
        return prev;
      });
    }
  };

  const handleRentalPeriodChange = (id: number, period: PeriodProps) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartId === id) {
          const newAmount =
            item.rent * item.quantity * (period / 30) + item.deposit;
          const newEndDate = calculateEndDate(item.rentStamp, period);
          return {
            ...item,
            period,
            amount: newAmount,
            ...(item.rentStamp && {
              returnStamp: newEndDate,
            }),
          };
        }
        return item;
      }),
    );
  };

  const handleStartDateChange = (id: number, rentStamp: string) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartId === id) {
          const newEndDate = calculateEndDate(
            rentStamp,
            Number(item.period) as PeriodProps,
          );
          return {
            ...item,
            rentStamp: rentStamp,
            returnStamp: newEndDate,
          };
        }
        return item;
      }),
    );
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

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartId === id) {
          const newQuantity = item.quantity + delta;
          if (newQuantity >= 1) {
            const newAmount =
              item.rent * newQuantity * (item.period / 30) + item.deposit;

            return {
              ...item,
              quantity: newQuantity,
              amount: newAmount,
            };
          }
        }
        return item;
      }),
    );
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
                {...item}
                isDatepickerTarget={false}
                $isActive={activeProductId === item.cartId}
                onClick={() => setActiveProductId(item.cartId)}
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
