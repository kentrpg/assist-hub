type TabData = {
  id: string;
  label: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
};

export const tabsData: TabData[] = [
  {
    id: "1",
    label: "具平地跑跳能力",
    imgAlt: "插畫顯示一名戴眼鏡的男子正揮手，表現友好或打招呼的動作。",
    imgSrc: "/images/action-assessment-1.webp",
    description: "可在平地上自由行走、跑步及跳躍，活動能力接近正常人。",
  },
  {
    id: "2",
    label: "在平地無法跑跳，但可放手行走",
    imgAlt:
      "插畫顯示兩名男子，一人手臂吊著繃帶，另一人使用拐杖並腳部打著石膏，象徵不同受傷狀態的描述。",
    imgSrc: "/images/action-assessment-2.webp",
    description: "需要扶手或輔具協助，能有限地行走和攀爬樓梯。",
  },
  {
    id: "3",
    label: "行走需扶持穩定物",
    imgAlt:
      "插畫顯示一名長者使用助行器站立，旁邊有一名女子攙扶，象徵支援與照護情境。",
    imgSrc: "/images/action-assessment-3.webp",
    description: "需使用助行器或輪椅，步態不穩，需他人協助移動。",
  },
  {
    id: "4",
    label: "無法行走，但能在無投靠支撐下持維持",
    imgAlt:
      "插畫顯示一名女子坐在電動輪椅上，右腳戴著護具，象徵依賴輔助工具的行動方式。",
    imgSrc: "/images/action-assessment-4.webp",
    description: "完全依賴輪椅或電動輔具，無法自行站立或行走。",
  },
  {
    id: "5",
    label: "無頭靠支撐下難以維持坐姿",
    imgAlt:
      "插畫顯示一位站立的人正在推著輪椅，上面坐著一位男子，象徵協助行動不便者的情境。",
    imgSrc: "/images/action-assessment-5.webp",
    description: "全身重度障礙，需全天候護理和支撐輔具，且需要貼身看護。",
  },
  {
    id: "6",
    label: "無法自行評估",
    imgAlt:
      "插畫顯示兩名男子，一人手臂吊著繃帶，另一人使用拐杖並腳部打著石膏，象徵不同受傷狀態的描述。",
    imgSrc: "/images/LOGO-default.webp",
    description: "需等待專業人士評估。",
  },
];
