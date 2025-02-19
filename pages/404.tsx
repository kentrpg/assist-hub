import NotFound from "@/components/pages/404";
import { MainWrapper } from "@/styles/wrappers";
import Head from "next/head";
const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 - 找不到頁面</title>
      </Head>
      <MainWrapper>
        <NotFound />
      </MainWrapper>
    </>
  );
};

export default NotFoundPage;
