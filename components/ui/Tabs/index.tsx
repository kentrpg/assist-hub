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
import { useDispatch, useSelector } from "react-redux";
import { setUserInquiry } from "@/utils/redux/slices/userInquiry";
import { RootState } from "@/utils/redux/store";

const Tabs = () => {
  const dispatch = useDispatch();
  const { level } = useSelector((state: RootState) => state.userInquiry);

  const activeTab = level || "1";

  const handleTabClick = (tab: typeof tabsData[0]) => {
    dispatch(
      setUserInquiry({
        level: tab.id,
        additionalInfo: tab.description,
      }),
    );
  };

  return (
    <TabsContainer>
      <TabsMenu>
        {tabsData.map((tab) => (
          <TabButton
            key={tab.id}
            $isActive={tab.id === activeTab}
            onClick={() => handleTabClick(tab)}
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
            ),
        )}
      </TabContent>
    </TabsContainer>
  );
};

export default Tabs;
