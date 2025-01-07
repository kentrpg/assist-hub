import { useRouter } from "next/router";
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
import React from "react";

type SideBarProps = {
  setActiveTab: (tab: ActiveTabType) => void;
  activeTab: ActiveTabType;
};

const SideBar: React.FC<SideBarProps> = ({ setActiveTab, activeTab }) => {
  const router = useRouter();

  const handleTabClick = (tabKey: ActiveTabType) => {
    setActiveTab(tabKey);
    router.push(`/user/${tabKey}`);
  };

  return (
    <SideBarContainer>
      <Profile>
        <img src="/images/Profile.svg" alt="用戶頭像" width={60} height={60} />
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
            onClick={() => handleTabClick(tab.key)}
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
