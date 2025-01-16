import All from "@/components/pages/product/All";
import { MainWrapper } from "@/styles/wrappers";
import { GetServerSideProps } from "next";
import { ProductItem } from "@/components/pages/product/All/data";

type AllPageProps = {
  products: ProductItem[];
};

export const getServerSideProps: GetServerSideProps<AllPageProps> = async (
  context
) => {
  try {
    const response = await fetch("http://52.172.145.130:8080/api/v1/products", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`HTTP 錯誤: ${response.status} ${response.statusText}`);
      return { notFound: true };
    }

    const responseData = await response.json();

    const products = responseData?.data || [];

    if (!Array.isArray(products)) {
      console.error("API 返回的數據格式不正確:", responseData);
      return { notFound: true };
    }

    context.res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=0"
    );

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("getServerSideProps 發生錯誤:", error);
    return { notFound: true };
  }
};

const Product: React.FC<AllPageProps> = ({ products }) => {
  return (
    <MainWrapper>
      <All products={products} />
    </MainWrapper>
  );
};

export default Product;
