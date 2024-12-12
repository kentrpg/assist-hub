import {
  Button,
  SideBarContainer,
  Tabs,
  ButtonContent,
  SideBarHeader,
  ProfileImg,
  Email,
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
      <ProfileImg>
        <Image
          src="/images/Avatar.png"
          alt="用戶頭像"
          width={60}
          height={60}
          priority
        />
      </ProfileImg>
      <SideBarHeader>
        <span>王小姐</span>
        <Email>A0912345678@gmail.com</Email>
      </SideBarHeader>
      <Tabs>
        {/* 基本資料按鈕 */}
        <Button
          $isActive={activeTab === "profile"} // 動態添加樣式
          onClick={() => setActiveTab("profile")} // 更新狀態
        >
          <ButtonContent>
            <MdPerson size={24} />
            <span>基本資料</span>
          </ButtonContent>
        </Button>

        {/* 我的訂單按鈕 */}
        <Button
          $isActive={activeTab === "orders"}
          onClick={() => setActiveTab("orders")}
        >
          <ButtonContent>
            <MdChecklist size={24} />
            <span>我的訂單</span>
          </ButtonContent>
        </Button>

        {/* 詢問單按鈕 */}
        <Button
          $isActive={activeTab === "inquiries"}
          onClick={() => setActiveTab("inquiries")}
        >
          <ButtonContent>
            <MdOutlineAccessible size={24} />
            <span>詢問單</span>
          </ButtonContent>
        </Button>
      </Tabs>
    </SideBarContainer>
  );
};

export default SideBar;
