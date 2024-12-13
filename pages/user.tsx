import React, { useState } from "react";
import Profile from "@/components/pages/user/Profile";
import SideBar from "@/components/pages/user/SideBar";
import { UserContainer } from "@/styles/wrappers";
import Orders from "@/components/pages/user/Orders";
import Inquiries from "@/components/pages/user/Inquiries";

const User = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "orders" | "inquiries"
  >("profile");

  return (
    <>
      <UserContainer>
        <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "profile" && <Profile />}
        {activeTab === "orders" && <Orders />}
        {activeTab === "inquiries" && <Inquiries />}
      </UserContainer>
    </>
  );
};

export default User;
