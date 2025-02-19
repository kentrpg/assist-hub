import { NextPage, GetServerSideProps } from "next";
import React from "react";
import UserPage from "@/components/pages/user/UserPage";
import { Wrapper100 } from "@/styles/wrappers";
import { ResultGetInquiries } from "@/types/getMemberInquiries";
import getInquiries from "@/utils/api/member/getInquiries";
import Head from "next/head";

type InquiryPageProps = {
  inquiriesData: typeof ResultGetInquiries.data;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token;

  console.log("inquiry token", token);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  const result = await getInquiries(token);

  console.log("inquiries result", result);

  return {
    props: {
      inquiriesData: result.data,
    },
  };
};

const Inquiry: NextPage<InquiryPageProps> = ({ inquiriesData }) => {
  return (
    <Wrapper100>
      <Head>
        <title>我的詢問單</title>
        <meta name="description" content="使用者詢問單一覽頁面" />
      </Head>
      <UserPage initialTab="inquiry" inquiriesData={inquiriesData} />
    </Wrapper100>
  );
};

export default Inquiry;
