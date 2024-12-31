import Signin from "@/components/pages/auth/Signin";
import { MainWrapper } from "@/styles/wrappers";
import Head from "next/head";

const Auth = () => {
  return (
    <>
      <Head>
        <title>登入</title>
        <meta name="description" content="登入頁面" />
      </Head>
      <MainWrapper>
        <Signin />
      </MainWrapper>
    </>
  );
};

export default Auth;
