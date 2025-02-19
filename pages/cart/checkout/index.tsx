import Checkout from "@/components/pages/cart/Checkout";
import { Wrapper60 as MainWrapper } from "@/styles/wrappers";
import Head from "next/head";

const CheckoutPage = () => {
  return (
    <>
      <Head>
        <title>訂單結帳</title>
        <meta name="description" content="訂單結帳" />
      </Head>
      <MainWrapper>
        <Checkout />
      </MainWrapper>
    </>
  );
};
export default CheckoutPage;
