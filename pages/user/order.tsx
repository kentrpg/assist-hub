import UserPage from "@/components/pages/user/UserPage";
import { Wrapper100 } from "@/styles/wrappers";
import { GetServerSideProps } from "next";
import type { Order } from "@/components/pages/user/Orders/data";
import getOrders from "@/utils/api/member/getOrders";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // TBD: 問學長這邊是否有比 !token 更簡單的判斷方式，讓型別驗證會通過
  const token = req.cookies.token;

  console.log("order token", token);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  const result = await getOrders(token);

  console.log("orders result", result);

  return {
    props: {
      ordersData: result.data,
    },
  };
};

type OrderPageProps = {
  ordersData: Order[];
};

const Order = ({ ordersData }: OrderPageProps) => {
  return (
    <Wrapper100>
      <UserPage initialTab="order" ordersData={ordersData} />
    </Wrapper100>
  );
};

export default Order;
