import { hasError } from "@/helpers/api/status";
import { OrderDataType } from "@/types/getAdminOrders";
import getOrder from "@/utils/api/admin/getOrder";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const token = req.cookies.token || "";
  const orderId = (params?.id as string) || "";
  console.log("getServerSideProps params", params, orderId);

  const result = await getOrder(token, orderId);

  if (hasError(result)) {
    console.error("嚴重錯誤:", result.error);
    throw result.error;
  }

  return {
    props: {
      order: result.data || {},
    },
  };
};

const Order = ({ order }: { order: OrderDataType }) => {
  console.log("order", order);
  return <div>{order.orderId}</div>;
};

export default Order;
