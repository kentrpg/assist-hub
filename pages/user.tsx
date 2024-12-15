import React, { useState } from "react";
import Profile from "@/components/pages/user/Profile";
import SideBar from "@/components/pages/user/SideBar";
// import { MainWrapper } from "@/styles/wrappers";
import UserWrapper from "@/components/pages/user/Wrapper/index";
import Orders from "@/components/pages/user/Orders";
import Inquiries from "@/components/pages/user/Inquiries";
import { MainWrapper } from "@/styles/wrappers";

const User = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "orders" | "inquiries"
  >("profile");

  return (
    <>
      <MainWrapper>
        <UserWrapper>
          <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
          {activeTab === "profile" && <Profile />}
          {activeTab === "orders" && <Orders />}
          {activeTab === "inquiries" && <Inquiries />}
        </UserWrapper>
      </MainWrapper>
    </>
  );
};

export default User;
