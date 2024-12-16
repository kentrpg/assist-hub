import React, { useState } from "react";
import { MainWrapper } from "@/styles/wrappers";
import Wrapper from "@/components/pages/user/Wrapper/index";
import SideBar from "@/components/pages/user/SideBar";
import Profile from "@/components/pages/user/Profile";
import Orders from "@/components/pages/user/Orders";
import Inquiries from "@/components/pages/user/Inquiries";

const User = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "orders" | "inquiries"
  >("profile");

  return (
    <>
      <MainWrapper>
        <Wrapper>
          <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
          {activeTab === "profile" && <Profile />}
          {activeTab === "orders" && <Orders />}
          {activeTab === "inquiries" && <Inquiries />}
        </Wrapper>
      </MainWrapper>
    </>
  );
};

export default User;
