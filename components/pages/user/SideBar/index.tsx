import {
  SideBarContainer,
  Span,
  Info,
  Email,
  Name,
  Tabs,
  Tab,
  Profile,
  Basic,
  Orders,
  Inquiries,
} from "./styled";
import Image from "next/image";
import { MdPerson, MdChecklist, MdOutlineAccessible } from "react-icons/md";
import React from "react";

// 定義 props 的類型
interface SideBarProps {
  setActiveTab: (tab: "profile" | "orders" | "inquiries") => void; // 僅限三個可能值
  activeTab: "profile" | "orders" | "inquiries";
}

const SideBar: React.FC<SideBarProps> = ({ setActiveTab, activeTab }) => {
  return (
    <SideBarContainer>
      <Profile>
        <Image
          src="/images/Avatar.png"
          alt="用戶頭像"
          width={60}
          height={60}
          priority
        />
      </Profile>
      <Info>
        <Name>王小姐</Name>
        <Email>A0912345678@gmail.com</Email>
      </Info>
      <Tabs>
        <Tab
          $isActive={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        >
          <Basic>
            <MdPerson size={24} />
            <Span>基本資料</Span>
          </Basic>
        </Tab>
        <Tab
          $isActive={activeTab === "orders"}
          onClick={() => setActiveTab("orders")}
        >
          <Orders>
            <MdChecklist size={24} />
            <Span>我的訂單</Span>
          </Orders>
        </Tab>
        <Tab
          $isActive={activeTab === "inquiries"}
          onClick={() => setActiveTab("inquiries")}
        >
          <Inquiries>
            <MdOutlineAccessible size={24} />
            <Span>詢問單</Span>
          </Inquiries>
        </Tab>
      </Tabs>
    </SideBarContainer>
  );
};

export default SideBar;
