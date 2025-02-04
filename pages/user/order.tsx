import { NextPage, GetServerSideProps } from "next";
import React from "react";
import UserPage from "@/components/pages/user/UserPage";
import { Wrapper100 } from "@/styles/wrappers";
import type { OrdersData } from "@/components/pages/user/Orders/ListItem/data";
import getOrders from "@/utils/api/member/getOrders";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token;

  console.log("order token", token);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  const result = await getOrders(token);

  console.log("orders result", result);

  return {
    props: {
      ordersData: result.data,
    },
  };
};

type OrderPageProps = {
  ordersData: OrdersData[];
};

const Order: NextPage<OrderPageProps> = ({ ordersData }) => {
  return (
    <Wrapper100>
      <Head>
        <title>我的訂單</title>
        <meta name="description" content="使用者訂單一覽頁面" />
      </Head>
      <UserPage initialTab="order" ordersData={ordersData} />
    </Wrapper100>
  );
};

export default Order;
