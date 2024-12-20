import React, { useState } from "react";
import { MainWrapper } from "@/styles/wrappers";
import Wrapper from "@/components/pages/user/Wrapper/index";
import SideBar from "@/components/pages/user/SideBar";
import Profile from "@/components/pages/user/Profile";
import Orders from "@/components/pages/user/Orders";
import Inquiries from "@/components/pages/user/Inquiries";
import Details from "@/components/pages/user/Orders/Details";
import { Order } from "../components/pages/user/Orders/data";
import { ActiveTabType } from "@/components/pages/user/SideBar/data";

const User = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("profile");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <MainWrapper>
      <Wrapper>
        <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "profile" && <Profile />}
        {activeTab === "orders" && (
          <Orders
            setActiveOrder={(order) => {
              setSelectedOrder(order);
              setActiveTab("details");
            }}
          />
        )}
        {activeTab === "details" && selectedOrder && (
          <Details order={selectedOrder} />
        )}
        {activeTab === "inquiries" && <Inquiries />}
      </Wrapper>
    </MainWrapper>
  );
};

export default User;
