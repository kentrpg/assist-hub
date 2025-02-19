import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { MainWrapper } from "@/styles/wrappers";
import Suggest from "@/components/pages/suggest";
import getSuggest from "@/utils/api/getSuggest";
import { SuggestPageProps } from "@/types/getSuggest";
import { hasError, isEmptyData } from "@/helpers/api/status";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const suggestId = params?.id as string;

  if (!suggestId) {
    return {
      notFound: true,
    };
  }

  const result = await getSuggest(suggestId);

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

const SuggestPage = ({ data }: { data: SuggestPageProps }) => {
  return (
    <>
      <Head>
        <title>建議單</title>
        <meta name="description" content="建議單頁面" />
      </Head>
      <MainWrapper>
        <Suggest {...data} />
      </MainWrapper>
    </>
  );
};

export default SuggestPage;
