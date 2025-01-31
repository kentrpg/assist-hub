import { MainWrapper } from "@/styles/wrappers";
import Error500 from "@/components/pages/500";
import Head from "next/head";
const Custom500Page = () => {
  return (
    <>
      <Head>
        <title>500 - 系統錯誤</title>
      </Head>
      <MainWrapper>
        <Error500 />
      </MainWrapper>
    </>
  );
};

export default Custom500Page;
