import { NextPage, GetServerSideProps } from "next";
import React from "react";
import UserPage from "@/components/pages/user/UserPage";
import { Wrapper100 } from "@/styles/wrappers";
import { InquiryData } from "@/components/pages/user/Inquiries/data";
import getInquiries from "@/utils/api/member/getInquiries";

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

type InquiryPageProps = {
  inquiriesData: InquiryData[];
};

const Inquiry: NextPage<InquiryPageProps> = ({ inquiriesData }) => {
  return (
    <Wrapper100>
      <UserPage initialTab="inquiry" inquiriesData={inquiriesData} />
    </Wrapper100>
  );
};

export default Inquiry;
