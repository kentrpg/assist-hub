import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Single from "@/components/pages/product/Single";
import { SinglePageProps } from "@/components/pages/product/Single/data";
import { MainWrapper } from "@/styles/wrappers";

const API_URL = "http://52.172.145.130:8080/api/v1/products";

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch("http://52.172.145.130:8080/api/v1/products");
    const result = await response.json();

    if (!result.data || result.data.length === 0) {
      return { paths: [], fallback: "blocking" };
    }

    const paths = result.data.map((product: { id: number }) => ({
      params: { id: product.id.toString() },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const response = await fetch(`${API_URL}/${id}`);
    const result = await response.json();

    if (
      !result.data ||
      !result.data.product ||
      result.data.product.length === 0
    ) {
      return { notFound: true };
    }

    const product = result.data.product;
    const comparison = result.data.comparison || [];
    const recommended = result.data.recommended || [];

    return {
      props: { product, comparison, recommended },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return { notFound: true };
  }
};

const ProductPage: React.FC<SinglePageProps> = ({
  product,
  comparison,
  recommended,
}) => {
  return (
    <MainWrapper>
      <Single
        product={product}
        comparison={comparison}
        recommended={recommended}
      />
    </MainWrapper>
  );
};

export default ProductPage;
