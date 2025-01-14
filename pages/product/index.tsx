import All from "@/components/pages/product/All";
import { MainWrapper } from "@/styles/wrappers";
import { GetServerSideProps, NextPage } from "next";
import {
  ProductItem,
  ProductApiResponse,
} from "@/components/pages/product/All/data";

type ProductPageProps = {
  products: ProductItem[];
};

const Product: NextPage<ProductPageProps> = ({ products }) => {
  return (
    <MainWrapper>
      <All products={products} />
    </MainWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({
  res,
}) => {
  try {
    const response = await fetch("http://localhost:4001/data");
    // const response = await fetch("http://52.172.145.130:8080/api/v1/products"); 後端測試用

    if (!response.ok) {
      console.error(`HTTP 錯誤: ${response.status} ${response.statusText}`);
      return {
        notFound: true,
      };
    }

    const products: ProductItem[] = await response.json();

    if (!Array.isArray(products)) {
      console.error("API 返回的數據格式不正確:", products);
      return {
        notFound: true,
      };
    }

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=30"
    ); //

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("getServerSideProps 發生錯誤:", error);
    return {
      notFound: true,
    };
  }
};

export default Product;
