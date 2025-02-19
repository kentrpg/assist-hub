import { GetStaticPaths, GetStaticProps } from "next";

import Head from "next/head";
import Register from "@/components/pages/auth/Register";
import Signin from "@/components/pages/auth/Signin";
import { MainWrapper } from "@/styles/wrappers";

const allowedMethods = ["signin", "register"];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allowedMethods.map((method) => ({
    params: { method },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const method = params?.method as string;

  if (!allowedMethods.includes(method)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      method,
    },
  };
};

const Auth = ({ method }: { method: string }) => {
  return (
    <>
      <Head>
        <title>{method === "register" ? "註冊" : "登入"}</title>
        <meta
          name="description"
          content={`${method === "register" ? "註冊" : "登入"}頁面`}
        />
      </Head>
      <MainWrapper>
        {method === "register" && <Register />}
        {method === "signin" && <Signin />}
      </MainWrapper>
    </>
  );
};

export default Auth;
