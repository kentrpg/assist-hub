import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/product/1",
      permanent: false,
    },
  };
};

const ProductIndex = () => null;

export default ProductIndex;
