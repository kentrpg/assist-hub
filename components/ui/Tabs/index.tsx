import React, { useState } from "react";
import {
  TabsContainer,
  TabsMenu,
  TabButton,
  TabContent,
  Image,
  Description,
  Group,
} from "./styled";
import { tabsData } from "./data";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <TabsContainer>
      <TabsMenu>
        {tabsData.map((tab) => (
          <TabButton
            key={tab.id}
            $isActive={tab.id === activeTab}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabsMenu>
      <TabContent>
        {tabsData.map(
          (tab) =>
            tab.id === activeTab && (
              <Group key={tab.id}>
                <Image src={tab.imgSrc} alt={tab.label} />
                <Description>{tab.description}</Description>
              </Group>
            )
        )}
      </TabContent>
    </TabsContainer>
  );
};

export default Tabs;
