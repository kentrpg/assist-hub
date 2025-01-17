import Cart from "@/components/pages/cart/ProductCard";
import { Wrapper60 as MainWrapper } from "@/styles/wrappers";
import { GetServerSideProps } from "next";
import { EnhancedCartItem } from "@/components/pages/cart/ProductCard/data";
import getCarts from "@/utils/api/getCarts";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const result = await getCarts(req.cookies.token || "");

  return {
    props: {
      data: result.data || [],
    },
  };
};

const CartPage = ({ data }: { data: EnhancedCartItem[] }) => {
  return (
    <>
      <Head>
        <title>購物車</title>
        <meta name="description" content="購物車頁面" />
      </Head>
      <MainWrapper>
        <Cart data={data} />
      </MainWrapper>
    </>
  );
};

export default CartPage;
