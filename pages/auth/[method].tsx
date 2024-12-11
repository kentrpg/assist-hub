import React from "react";
import { useRouter } from 'next/router';
import Register from "@/components/pages/auth/Register";
import Signin from "@/components/pages/auth/Signin";
import Head from 'next/head'

const Auth = () => {
  const router = useRouter();
  const { method } = router.query; // 獲取路徑參數 /auth/register 或 /auth/signin

  return (
    <>
      <Head>
        <title> {method === 'register' ? '註冊' : '登入'} </title>
        <meta name="description" content={`${method === 'register' ? '註冊' : '登入'}頁面`} />
      </Head>
      {method === 'register' && <Register />}
      {method === '' && <Signin />}
      {method === 'signin' && <Signin />}
    </>
  );
};

export default Auth;
