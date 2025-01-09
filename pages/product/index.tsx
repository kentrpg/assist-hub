import All from "@/components/pages/product/All";
import { MainWrapper } from "@/styles/wrappers";
import { GetStaticProps, NextPage } from "next";
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

export const getStaticProps: GetStaticProps<ProductPageProps> = async () => {
  try {
    const response = await fetch("http://localhost:4001/data");

    // 檢查 HTTP 狀態碼是否為 200
    if (!response.ok) {
      console.error(`HTTP 錯誤: ${response.status} ${response.statusText}`);
      return {
        notFound: true, // 回傳 404 頁面
      };
    }

    const products: ProductItem[] = await response.json();

    // 如果返回的數據不是陣列，可能出現問題
    if (!Array.isArray(products)) {
      console.error("API 返回的數據格式不正確:", products);
      return {
        notFound: true,
      };
    }

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("getStaticProps 發生錯誤:", error);
    return {
      notFound: true,
    };
  }
};
export default Product;
