import {
  SideBarContainer,
  Span,
  Info,
  Email,
  Name,
  Tabs,
  Tab,
  Profile,
} from "./styled";
import { tabs, ActiveTabType } from "./data";
import Image from "next/image";
import React from "react";

type SideBarProps = {
  setActiveTab: (tab: ActiveTabType) => void; //通常用在FC上(只處理東西)
  activeTab: ActiveTabType;
};

const SideBar: React.FC<SideBarProps> = ({ setActiveTab, activeTab }) => {
  return (
    <SideBarContainer>
      <Profile>
        <Image
          src="/images/Profile.svg"
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
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            $isActive={tab.isActive(activeTab)}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.icon}
            <Span>{tab.label}</Span>
          </Tab>
        ))}
      </Tabs>
    </SideBarContainer>
  );
};

export default SideBar;
