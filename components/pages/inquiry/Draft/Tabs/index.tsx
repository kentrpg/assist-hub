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

const tabsData = [
  {
    id: "1",
    label: "具平地跑跳能力",
    imgSrc: "/images/action-assessment-1.png",
    description: "步態穩定適合平地及短距離移動。",
  },
  {
    id: "2",
    label: "在平地無法跑跳，但可放手行走",
    imgSrc: "/images/action-assessment-1.png",
    description:
      "可在平地行走，長距離或不穩地面需助行輔具，階梯或跑跳能力受限。",
  },
  {
    id: "3",
    label: "行走需扶持穩定物",
    imgSrc: "/images/action-assessment-1.png",
    description: "適合需要扶持或有輔助器需求的使用者。",
  },
  {
    id: "4",
    label: "無法行走，但能在無投靠支撐下持維持",
    imgSrc: "/images/action-assessment-1.png",
    description: "適合長時間需要支撐的使用者。",
  },
  {
    id: "5",
    label: "無頭靠支撐下難以維持坐姿",
    imgSrc: "/images/action-assessment-1.png",
    description: "提供全身性的行動支援。",
  },
  {
    id: "6",
    label: "無法自行評估",
    imgSrc: "/images/action-assessment-1.png",
    description: "適合多樣化行動限制的解決方案。",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("2");

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
