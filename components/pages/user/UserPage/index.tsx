import React, { useState } from "react";
import SideBar from "@/components/pages/user/SideBar";
import Profile from "@/components/pages/user/Profile";
import Orders from "@/components/pages/user/Orders";
import Inquiries from "@/components/pages/user/Inquiries";
import Details from "@/components/pages/user/Orders/Details";
import { OrdersData } from "@/components/pages/user/Orders/ListItem/data";
import { ResultGetInquiries } from "@/types/getMemberInquiries";
import { ActiveTabType } from "@/components/pages/user/SideBar/data";
import { Container } from "./styled";
import { ResultGetMemberOrderType } from "@/types/getOrder";
import { useModal } from "@/components/ui/Modal";

type UserPageLayoutProps = {
  initialTab: ActiveTabType;
  ordersData?: OrdersData[];
  inquiriesData?: typeof ResultGetInquiries.data;
};

const UserPage: React.FC<UserPageLayoutProps> = ({
  initialTab,
  ordersData,
  inquiriesData,
}) => {
  const { openModal, Modal } = useModal();
  const [activeTab, setActiveTab] = useState<ActiveTabType>(initialTab);
  const [selectedOrder, setSelectedOrder] = useState<OrdersData | null>(null);
  const [orderData, setOrderData] = useState<
    ResultGetMemberOrderType["data"] | null
  >(null);

  const handleViewOrder = async (order: OrdersData) => {
    try {
      const res = await fetch("/api/member/getOrder", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: Number(order.orderId),
        }),
      });

      const result: ResultGetMemberOrderType = await res.json();

      console.log("getOrder result", result);

      if (result.statusCode === 200 && result.status) {
        setOrderData(result.data);
        setSelectedOrder(order);
        setActiveTab("detail");
      } else {
        console.error("獲取訂單詳細資料失敗:", result.error);
        openModal(result.message || "獲取訂單詳細資料失敗，請稍後再試");
      }
    } catch (error) {
      console.error("無法獲取訂單詳細資料:", error);
      openModal("發生錯誤，請稍後再試");
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
          setActiveOrder={handleViewOrder}
          ordersData={ordersData || []}
        />
      )}
      {activeTab === "detail" && selectedOrder && orderData && (
        <Details onBack={handleBackToOrders} orderData={orderData} />
      )}
      {activeTab === "inquiry" && <Inquiries inquiriesData={inquiriesData} />}
      <Modal />
    </Container>
  );
};

export default UserPage;
