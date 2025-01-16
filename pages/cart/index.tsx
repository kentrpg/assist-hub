import Cart from "@/components/pages/cart/ProductCard";
import { Wrapper60 as MainWrapper } from "@/styles/wrappers";
import { GetStaticProps } from "next";
import getOrder from "@/utils/api/getCarts";
import { EnhancedCartItem } from "@/components/pages/cart/ProductCard/data";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await getOrder();

    const enhancedData: EnhancedCartItem[] = response.data.map((item) => ({
      ...item,
      isDatepickerTarget: false,
    }));

    return {
      props: {
        data: enhancedData,
      },
    };
  } catch (error) {
    console.error("取得購物車資料失敗:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};

const CartPage = ({ data }: { data: EnhancedCartItem[] }) => {
  return (
    <MainWrapper>
      <Cart data={data} />
    </MainWrapper>
  );
};

export default CartPage;
