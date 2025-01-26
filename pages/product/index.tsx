import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import All from "@/components/pages/product/All";
import { MainWrapper } from "@/styles/wrappers";
import { ProductItem } from "@/components/pages/product/All/data";
import getProducts from "@/utils/api/getProducts";
import InquiryBar from "@/components/ui/InquiryBar";

type AllPageProps = {
  products: ProductItem[];
};

export const getServerSideProps: GetServerSideProps<AllPageProps> = async (
  context,
) => {
  try {
    const result = await getProducts();

    if (!result.status || !Array.isArray(result.data)) {
      console.error("API 返回錯誤或數據格式不正確:", result);
      return { notFound: true };
    }

    context.res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=0",
    );

    return {
      props: {
        products: result.data,
      },
    };
  } catch (error) {
    console.error("getServerSideProps 發生錯誤:", error);
    return { notFound: true };
  }
};

const Product: NextPage<AllPageProps> = ({ products }) => {
  return (
    <MainWrapper>
      <Head>
        <title>所有輔具</title>
        <meta
          name="description"
          content="輔具商品一覽頁面"
        />
      </Head>
      <All products={products} />
      <InquiryBar />
    </MainWrapper>
  );
};

export default Product;
