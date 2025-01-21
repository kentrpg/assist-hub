import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { MainWrapper } from "@/styles/wrappers";
import SubmittedInquiry from "@/components/pages/inquiry/Submitted";
import getInquiry from "@/utils/api/getInquiry";
import { InquiryPageProps } from "@/types/getInquiry";
import { hasError, isEmptyData } from "@/helpers/api/status";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking", // blocking 確保 SEO
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const inquiryId = params?.id as string;

  const result = await getInquiry(inquiryId);

  console.log("inquiry result", result);

  const notFoundId = isEmptyData(result) || hasError(result);
  if (notFoundId) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: result.data,
    },
  };
};

const InquiryPage = ({ data }: InquiryPageProps) => {
  return (
    <>
      <Head>
        <title>詢問單詳情</title>
        <meta name="description" content="詢問單詳情頁面" />
      </Head>
      <MainWrapper>
        <SubmittedInquiry data={data} />
      </MainWrapper>
    </>
  );
};

export default InquiryPage;
