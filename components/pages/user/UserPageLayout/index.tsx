import React, { useState } from "react";
import { MainWrapper } from "@/styles/wrappers";
import Wrapper from "@/components/pages/user/Wrapper/index";
import SideBar from "@/components/pages/user/SideBar";
import Profile from "@/components/pages/user/Profile";
import Orders from "@/components/pages/user/Orders";
import Inquiries from "@/components/pages/user/Inquiries";
import Details from "@/components/pages/user/Orders/Details";
import { Order } from "@/components/pages/user/Orders/data";
import { ActiveTabType } from "@/components/pages/user/SideBar/data";

type UserPageLayoutProps = {
  initialTab: ActiveTabType;
};

const UserPageLayout: React.FC<UserPageLayoutProps> = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>(initialTab);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setActiveTab("detail");
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
    setActiveTab("order");
  };

  return (
    <MainWrapper>
      <Wrapper>
        <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "profile" && <Profile />}
        {activeTab === "order" && <Orders setActiveOrder={handleViewOrder} />}
        {activeTab === "detail" && selectedOrder && (
          <Details order={selectedOrder} onBack={handleBackToOrders} />
        )}
        {activeTab === "inquiry" && <Inquiries />}
      </Wrapper>
    </MainWrapper>
  );
};

export default UserPageLayout;
