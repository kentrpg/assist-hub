export type ProductItem = {
  id: number;
  type: string;
  name: string;
  level: string;
  rent: number;
  imgSrc: string;
  imgAlt: string;
  features: string[];
  description: string;
};

export const tabsData = [
  { label: "行動輪椅", value: "wheelChair" },
  { label: "拐杖步行", value: "crutch" },
  { label: "臥室寢具", value: "bed" },
  { label: "呼吸照護", value: "oxygen" },
];

export const radioOptions = [
  { id: "1", label: "具平地跑跳能力" },
  { id: "2", label: "在平地無法跑跳，但可放手行走" },
  { id: "3", label: "行走需扶持穩定物" },
  { id: "4", label: "無法行走，但能在無頭靠支撐下維持坐姿" },
  { id: "5", label: "無頭靠支撐下難以維持坐姿" },
];
