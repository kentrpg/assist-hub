import React, { useState } from "react";
import SideBar from "@/components/pages/user/SideBar";
import Profile from "@/components/pages/user/Profile";
import Orders from "@/components/pages/user/Orders";
import Inquiries from "@/components/pages/user/Inquiries";
import Details from "@/components/pages/user/Orders/Details";
import { ResultGetInquiries } from "@/types/getMemberInquiries";
import { ResultGetMemberOrder } from "@/types/getOrder";
import { ResultGetMemberOrders } from "@/types/getOrders";
import { ActiveTabType } from "@/components/pages/user/SideBar/data";
import { Container } from "./styled";
import { useModal } from "@/components/ui/Modal";

type UserPageLayoutProps = {
  initialTab: ActiveTabType;
  ordersData?: typeof ResultGetMemberOrders.data;
  inquiriesData?: typeof ResultGetInquiries.data;
};

const UserPage: React.FC<UserPageLayoutProps> = ({
  initialTab,
  ordersData,
  inquiriesData,
}) => {
  const { openModal, Modal } = useModal();
  const [activeTab, setActiveTab] = useState<ActiveTabType>(initialTab);
  const [selectedOrder, setSelectedOrder] = useState<
    (typeof ResultGetMemberOrders.data)[number] | null
  >(null);
  const [orderData, setOrderData] = useState<
    typeof ResultGetMemberOrder.data | null
  >(null);

  const handleViewOrder = async (
    order: (typeof ResultGetMemberOrders.data)[number],
  ) => {
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

      const result: typeof ResultGetMemberOrder = await res.json();

      console.log("getOrder result", result);

      if (result.statusCode === 200 && result.status) {
        setOrderData(result.data);
        setSelectedOrder(order);
        setActiveTab("detail");
      } else {
        console.error("獲取訂單詳細資料失敗:", result.message);
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
