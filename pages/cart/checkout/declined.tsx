import { Wrapper60 as MainWrapper } from "@/styles/wrappers";
import Declined from "@/components/pages/cart/Checkout/Declined";
import Head from "next/head";

const DeclinedPage = () => {
  return (
    <>
      <Head>
        <title>付款失敗</title>
        <meta name="description" content="付款失敗" />
      </Head>
      <MainWrapper>
        <Declined />
      </MainWrapper>
    </>
  );
};

export default DeclinedPage;
