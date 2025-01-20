import { GetServerSideProps } from "next";
import Head from "next/head";
import { MainWrapper } from "@/styles/wrappers";
import DraftInquiry from "@/components/pages/inquiry/Draft";
import postInquiry from "@/utils/api/postInquiry";
import { RequestPostInquiryType, InquiryPageProps } from "@/types/postInquiry";
import { hasError, isEmptyData } from "@/helpers/api/status";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // TBD: 之後接 Redux inquiry slice store
  const inquiryData: RequestPostInquiryType = {
    productIds: [21, 12],
  };

  const result = await postInquiry(req.cookies.token || "", inquiryData);

  const notFoundId = isEmptyData(result) || hasError(result);
  if (notFoundId) {
    return {
      notFound: true,
    };
  }

  console.log("result", result);

  return {
    props: {
      data: result.data,
    },
  };
};

const InquiryPage = ({ data }: { data: InquiryPageProps }) => {
  return (
    <>
      <Head>
        <title>詢問單</title>
        <meta name="description" content="詢問單頁面" />
      </Head>
      <MainWrapper>
        <DraftInquiry data={data} />
      </MainWrapper>
    </>
  );
};

export default InquiryPage;
