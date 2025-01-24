import { Wrapper60 as MainWrapper } from "@/styles/wrappers";
import Confirm from "@/components/pages/cart/PaymentConfirm";
import Head from "next/head";

const ConfirmPage = () => {
  return (
    <>
      <Head>
        <title>訂單成立</title>
        <meta name="description" content="訂單成立" />
      </Head>
      <MainWrapper>
        <Confirm />
      </MainWrapper>
    </>
  );
};

export default ConfirmPage;
