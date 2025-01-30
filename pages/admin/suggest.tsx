import AdminLayout from "@/components/pages/admin/Layout";
import SuggestTemplate from "@/components/pages/admin/Suggest";
import getSuggest from "@/utils/api/admin/getSuggest";
import { GetServerSideProps } from "next";
import {
  ResultGetSuggest,
  SuggestType,
} from "@/components/pages/admin/Suggest/data";
import { isValid } from "@/helpers/api/status";
import { getFilterProducts } from "@/utils/api/getFilterProducts";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
  req,
}) => {
  try {
    const token = req.cookies.token || "";
    const queryIndex = resolvedUrl.indexOf("?");
    const inquiryId = queryIndex !== -1 ? resolvedUrl.slice(queryIndex) : "";

    const [suggestResult, productsResult] = await Promise.all([
      getSuggest(token, inquiryId),
      getFilterProducts({ type: "wheelChair", lv: "-1" }),
    ]);

    if (!isValid(suggestResult) || !isValid(productsResult)) {
      return {
        props: {
          suggestInfo: ResultGetSuggest.data,
          filterProducts: [],
          error: "數據獲取失敗",
        },
      };
    }

    return {
      props: {
        suggestInfo: suggestResult.data,
        filterProducts: productsResult.data || [],
      },
    };
  } catch (error) {
    console.error("嚴重錯誤:", error);
    throw error;
  }
};

const Suggest = ({ suggestInfo, filterProducts }: SuggestType) => {
  return (
    <>
      <Head>
        <title>回覆建議單</title>
        <meta name="description" content="回覆建議單" />
      </Head>
      <AdminLayout>
        <SuggestTemplate
          suggestInfo={suggestInfo}
          filterProducts={filterProducts}
        />
      </AdminLayout>
    </>
  );
};

export default Suggest;
