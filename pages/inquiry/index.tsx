import { GetServerSideProps } from "next";
import Head from "next/head";
import { MainWrapper } from "@/styles/wrappers";
import Empty from "@/components/pages/inquiry/Empty";
import DraftInquiry from "@/components/pages/inquiry/Draft";
import Unauthorized from "@/components/pages/inquiry/Unauthorized";
import postInquiry from "@/utils/api/postInquiry";
import { RequestPostInquiryType, InquiryPageProps } from "@/types/postInquiry";
import { isOk } from "@/helpers/api/status";
import check from "@/utils/api/auth/check";

type Props = {
  isAuthorized: boolean;
  data: NonNullable<InquiryPageProps>;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const res = await check(req.cookies.token || "");

  if (!isOk(res)) {
    return {
      props: {
        isAuthorized: false,
        data: [],
      },
    };
  }

  // TBD: 之後接 Redux inquiry slice store
  const inquiryData: RequestPostInquiryType = {
    productIds: [21, 12],
    // productIds: [],
  };

  if (inquiryData.productIds.length === 0) {
    return {
      props: {
        isAuthorized: true,
        data: [],
      },
    };
  }

  const result = await postInquiry(req.cookies.token || "", inquiryData);

  return {
    props: {
      isAuthorized: true,
      data: result.data || [],
    },
  };
};

const InquiryPage = ({ isAuthorized, data }: Props) => {
  const getPageContent = () => {
    const contentMap = {
      unauthorized: <Unauthorized />,
      empty: <Empty />,
      draft: <DraftInquiry data={data} />,
    };

    if (!isAuthorized) {
      return contentMap.unauthorized;
    }

    return data.length > 0 ? contentMap.draft : contentMap.empty;
  };

  return (
    <>
      <Head>
        <title>詢問單</title>
        <meta name="description" content="詢問單頁面" />
      </Head>
      <MainWrapper>{getPageContent()}</MainWrapper>
    </>
  );
};

export default InquiryPage;
