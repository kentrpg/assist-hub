
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import Single from "@/components/pages/product/Single";
import { SinglePageProps } from "@/components/pages/product/Single/data";
import { MainWrapper } from "@/styles/wrappers";
import getProduct from "@/utils/api/getProduct";
import getProducts from "@/utils/api/getProducts";
import InquiryBar from "@/components/ui/InquiryBar";

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // 使用封裝的 getProducts API Function 獲取商品資料
    const result = await getProducts();

    if (!result.status || !Array.isArray(result.data)) {
      console.error("Error fetching product data:", result.message);
      return { paths: [], fallback: "blocking" };
    }

    const paths = result.data.map((product) => ({
      params: { id: product.id.toString() },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const result = await getProduct(Number(id));

    if (!result.status || !result.data || !result.data.product) {
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

const ProductPage: NextPage<SinglePageProps> = ({
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
      <InquiryBar />
    </MainWrapper>
  );
};

export default ProductPage;



// import { GetStaticPaths, GetStaticProps, NextPage } from "next";
// import React from "react";
// import Single from "@/components/pages/product/Single";
// import { SinglePageProps } from "@/components/pages/product/Single/data";
// import { MainWrapper } from "@/styles/wrappers";
// import getProduct from "@/utils/api/getProduct";
// import getProducts from "@/utils/api/getProducts";
// import InquiryBar from "@/components/ui/InquiryBar";

// export const getStaticPaths: GetStaticPaths = async () => {
//   try {
//     const result = await getProducts();

//     if (!result?.status || !Array.isArray(result?.data)) {
//       console.error("Invalid product data:", result?.message || "No data");
//       return { paths: [], fallback: "blocking" };
//     }

//     const paths = result.data.map((product) => ({
//       params: { id: product.id.toString() },
//     }));

//     return {
//       paths,
//       fallback: "blocking",
//     };
//   } catch (error) {
//     console.error("getStaticPaths Error:", error);
//     return { paths: [], fallback: "blocking" };
//   }
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { id } = context.params as { id: string };

//   if (!id || isNaN(Number(id))) {
//     console.error("Invalid product ID:", id);
//     return { notFound: true };
//   }

//   try {
//     const result = await getProduct(Number(id));

//     if (!result?.status || !result?.data?.product) {
//       console.error(
//         "Product not found or invalid:",
//         result?.message || "No data",
//       );
//       return { notFound: true };
//     }

//     return {
//       props: {
//         product: result.data.product,
//         comparison: result.data.comparison || [],
//         recommended: result.data.recommended || [],
//       },
//     };
//   } catch (error) {
//     console.error("getStaticProps Error:", error);
//     return { notFound: true };
//   }
// };

// const ProductPage: NextPage<SinglePageProps> = ({
//   product,
//   comparison,
//   recommended,
// }) => {
//   return (
//     <MainWrapper>
//       {product ? (
//         <Single
//           product={product}
//           comparison={comparison || []}
//           recommended={recommended || []}
//         />
//       ) : (
//         <p>商品數據加載失敗，請稍後再試。</p>
//       )}
//       <InquiryBar />
//     </MainWrapper>
//   );
// };

// export default ProductPage;
