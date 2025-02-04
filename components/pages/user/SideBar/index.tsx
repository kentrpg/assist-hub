import { useRouter } from "next/router";
import {
  SideBarContainer,
  Span,
  Tabs,
  Tab,
  Wrapper,
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
      <Tabs>
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            $isActive={tab.isActive(activeTab)}
            onClick={() => handleTabClick(tab.key)}
          >
            <Wrapper>
              {tab.icon}
              <Span>{tab.label}</Span>
            </Wrapper>
          </Tab>
        ))}
      </Tabs>
    </SideBarContainer>
  );
};

export default SideBar;
