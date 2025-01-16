import { Wrapper60 as MainWrapper } from "@/styles/wrappers";
import Approval from "@/components/pages/cart/Checkout/Approval";
import Head from "next/head";

const ApprovalPage = () => {
  return (
    <>
      <Head>
        <title>訂單成立</title>
        <meta name="description" content="訂單成立" />
      </Head>
      <MainWrapper>
        <Approval />
      </MainWrapper>
    </>
  );
};

export default ApprovalPage;
