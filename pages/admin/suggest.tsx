import AdminLayout from "@/components/pages/admin/Layout";
import SuggestTemplate from "@/components/pages/admin/Suggest";
import getSuggest from "@/utils/api/admin/getSuggest";
import { GetServerSideProps } from "next";
import {
  initialProductFilter,
  ProductFilterState,
  ResultGetSuggest,
  SuggestType,
} from "@/components/pages/admin/Suggest/data";
import { hasError, isValid } from "@/helpers/api/status";
import { getFilterProducts } from "@/utils/api/getFilterProducts";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
  req,
}) => {
  const token = req.cookies.token || "";
  const queryIndex = resolvedUrl.indexOf("?");
  const inquiryId = queryIndex !== -1 ? resolvedUrl.slice(queryIndex) : "";

  const [suggestResult, productsResult] = await Promise.all([
    getSuggest(token, inquiryId),
    getFilterProducts({ type: "wheelChair", lv: "-1" }),
  ]);

  if (hasError(suggestResult) || hasError(productsResult)) {
    console.error("嚴重錯誤:", suggestResult.error, productsResult.error);
    throw suggestResult.error;
  }

  if (!isValid(suggestResult) || !isValid(productsResult)) {
    return {
      redirect: {
        destination: "/admin/suggests",
        permanent: false,
      },
    };
  }

  const filterProducts: ProductFilterState = {
    wheelChair: (productsResult.data || []).filter(
      (product) =>
        !suggestResult?.data?.products.some(
          (selectedProduct) => selectedProduct.productId === product.id,
        ),
    ),
    crutch: [],
    bed: [],
    oxygen: [],
  };

  return {
    props: {
      suggestInfo: suggestResult.data,
      filterProducts,
    },
  };
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
