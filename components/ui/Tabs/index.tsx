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
import { inquiryTabs, StepImage } from "@/constants/statusPageContent";
import { useDispatch, useSelector } from "react-redux";
import { setUserInquiry } from "@/utils/redux/slices/userInquiry";
import { RootState } from "@/utils/redux/store";

const Tabs = () => {
  const dispatch = useDispatch();
  const { level } = useSelector((state: RootState) => state.userInquiry);
  const activeTabData = inquiryTabs[Number(level) - 1];

  const handleTabClick = (tab: StepImage) => {
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
        {inquiryTabs.map((tab) => (
          <TabButton
            key={tab.id}
            $isActive={tab.id === level}
            onClick={() => handleTabClick(tab)}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabsMenu>
      <TabContent>
        <Group key={activeTabData.id}>
          <Image {...activeTabData.imageProps} width={270} height={300} />
          <Description>{activeTabData.description}</Description>
        </Group>
      </TabContent>
    </TabsContainer>
  );
};

export default Tabs;
