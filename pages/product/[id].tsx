import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Single from "@/components/pages/product/Single";
import { ProductPageProps } from "@/components/pages/product/Single/data";

const API_URL = `${process.env.NEXT_PUBLIC_JSONSERVER_URL}/products`;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();

  const paths = data.data.map((product: { id: string }) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };
  const response = await fetch(`${API_URL}?id=${id}`);
  const data = await response.json();

  const product = data.data.find((p: { id: string }) => p.id === id);

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

  return <Single product={product} />;
};

export default ProductPage;
