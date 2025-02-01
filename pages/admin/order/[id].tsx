import AdminLayout from "@/components/pages/admin/Layout";
import OrderDetails from "@/components/pages/admin/OrderDetails";
import { OrderData } from "@/components/pages/admin/OrderDetails/data";
import { hasError, isEmptyData } from "@/helpers/api/status";
import getOrder from "@/utils/api/admin/getOrder";
import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const token = req.cookies.token || "";
  const orderId = (params?.id as string) || "";

  const result = await getOrder(token, orderId);

  if (hasError(result)) {
    console.error("嚴重錯誤:", result.error);
    throw result.error;
  }

  if (isEmptyData(result)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      order: result.data || {},
    },
  };
};

const Order = ({ order }: { order: OrderData }) => {
  return (
    <>
      <Head>
        <title>訂單詳情</title>
        <meta name="description" content="訂單詳情" />
      </Head>
      <AdminLayout>
        <OrderDetails order={order} />
      </AdminLayout>
    </>
  );
};

export default Order;
