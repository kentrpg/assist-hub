import Head from "next/head";
import { MainWrapper } from "@/styles/wrappers";
import Faq from "@/components/pages/faq";

const FaqPage = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="FAQ" />
      </Head>
      <MainWrapper>
        <Faq />
      </MainWrapper>
    </>
  );
};

export default FaqPage;
