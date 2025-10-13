import { GetServerSideProps } from "next";

import Head from "next/head";
import Register from "@/components/pages/auth/Register";
import Signin from "@/components/pages/auth/Signin";
import { MainWrapper } from "@/styles/wrappers";

const allowedMethods = ["signin", "register"];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const methodParam = params?.method;
  const method = Array.isArray(methodParam) ? methodParam[0] : methodParam;
  console.log("getServerSideProps auth/[method]", method, methodParam);
  console.log("method", method, !method || !allowedMethods.includes(method));

  if (!method || !allowedMethods.includes(method)) {
    console.log("redirect to /auth/signin");
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      method,
    },
  };
};

const Auth = ({ method }: { method: string }) => {
  console.log("Auth page", method);
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
