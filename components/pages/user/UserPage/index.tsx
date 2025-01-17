import React, { useState } from "react";
import SideBar from "@/components/pages/user/SideBar";
import Profile from "@/components/pages/user/Profile";
import Orders from "@/components/pages/user/Orders";
import Inquiries from "@/components/pages/user/Inquiries";
import Details from "@/components/pages/user/Orders/Details";
import { Order } from "@/components/pages/user/Orders/data";
import { ActiveTabType } from "@/components/pages/user/SideBar/data";
import { Container } from "./styled";
import { ResultGetMemberOrderType } from "@/types/getOrder";

type UserPageLayoutProps = {
  initialTab: ActiveTabType;
  ordersData?: Order[];
};

const UserPage: React.FC<UserPageLayoutProps> = ({
  initialTab,
  ordersData,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>(initialTab);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orderData, setOrderData] = useState<
    ResultGetMemberOrderType["data"] | null
  >(null);

  const handleViewOrder = async (order: Order) => {
    const res = await fetch("/api/member/getOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: Number(order.orderId),
      }),
    });

    const result = await res.json();

    console.log("getOrder result", result);

    if (result.statusCode === 200 && result.status) {
      setOrderData(result.data);
      setSelectedOrder(order);
      setActiveTab("detail");
    } else {
      console.error("獲取訂單詳細資料失敗:", result.error);
      alert(result.message || "獲取訂單詳細資料失敗，請稍後再試");
    }
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
    setOrderData(null);
    setActiveTab("order");
  };

  return (
    <Container>
      <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "profile" && <Profile />}
      {activeTab === "order" && (
        <Orders
          setActiveOrder={handleViewOrder as any}
          ordersData={ordersData}
        />
      )}
      {activeTab === "detail" && selectedOrder && (
        <Details
          order={selectedOrder}
          onBack={handleBackToOrders}
          orderData={orderData}
        />
      )}
      {activeTab === "inquiry" && <Inquiries />}
    </Container>
  );
};

export default UserPage;
