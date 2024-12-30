import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Product from "@/components/pages/Product/index";
import { ProductPageProps } from "@/components/pages/Product/data";

const API_URL = "http://localhost:4000/products";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();

  const paths = data.data.map((product: { id: number }) => ({
    params: { id: product.id.toString() },
  }));

  paths.push({ params: { id: "1" } });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };
  const response = await fetch(`${API_URL}?id=${id}`);
  const data = await response.json();

  const product = data.data.find((p: { id: number }) => p.id === Number(id));

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: { product },
  };
};

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <Product product={product} />;
};

export default ProductPage;
