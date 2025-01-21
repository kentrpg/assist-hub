import { GetServerSideProps } from "next";
import Head from "next/head";
import { MainWrapper } from "@/styles/wrappers";
import DraftInquiry from "@/components/pages/inquiry/Draft";
import Unauthorized from "@/components/pages/inquiry/Unauthorized";
import { isOk } from "@/helpers/api/status";
import check from "@/utils/api/auth/check";

type Props = {
  isAuthorized: boolean;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const res = await check(req.cookies.token || "");

  return {
    props: {
      isAuthorized: isOk(res),
    },
  };
};

const InquiryPage = ({ isAuthorized }: Props) => {
  const getPageContent = () => {
    const contentMap = {
      unauthorized: <Unauthorized />,
      draft: <DraftInquiry />,
    };

    if (!isAuthorized) {
      return contentMap.unauthorized;
    }

    return contentMap.draft;
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
