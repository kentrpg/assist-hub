import { layoutPath } from "@/constants/imagePath";
import { ReactNode } from "react";
import React from "react";

import {
  MdPhonelink,
  MdCreditCard,
  MdOutlineLocalShipping,
  MdCalendarToday,
  MdAttachMoney,
} from "react-icons/md";

type Step = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const steps: Step[] = [
  {
    title: "預約租賃",
    description: "提前預約功能，確保您需要時輔具隨時可用。",
    icon: React.createElement(MdPhonelink, { size: 24, color: "#103F99" }),
  },
  {
    title: "線上付款",
    description: "確認租賃方案後，支持多種支付方式，輕鬆完成線上付款。",
    icon: React.createElement(MdCreditCard, { size: 24, color: "#103F99" }),
  },
  {
    title: "等待配送",
    description: "我們的配送團隊會根據您指定的時間與地點，快速將輔具送達。",
    icon: React.createElement(MdOutlineLocalShipping, {
      size: 24,
      color: "#103F99",
    }),
  },
  {
    title: "租賃期滿",
    description: "租賃結束前，我們會提醒您續租或安排回收服務。",
    icon: React.createElement(MdCalendarToday, { size: 24, color: "#103F99" }),
  },
  {
    title: "押金退回",
    description: "押金退回流程透明，即時返還至原支付方式，確保用戶無後顧之憂。",
    icon: React.createElement(MdAttachMoney, { size: 24, color: "#103F99" }),
  },
];

export type BodyPartId =
  | "spine"
  | "waist"
  | "hip"
  | "knee"
  | "ankle"
  | "shoulder"
  | "arm"
  | "wrist"
  | "neck";

export type BodyPart = {
  id: BodyPartId;
  name: string;
};

export const bodyPartsLeft: BodyPart[] = [
  { id: "spine", name: "脊椎" },
  { id: "waist", name: "腰部" },
  { id: "hip", name: "髖部" },
  { id: "knee", name: "膝蓋" },
  { id: "ankle", name: "腳踝" },
];

export const bodyPartsRight: BodyPart[] = [
  { id: "neck", name: "頭頸" },
  { id: "shoulder", name: "肩部" },
  { id: "arm", name: "手臂" },
  { id: "wrist", name: "手腕" },
];

export type Category = {
  name: string;
  imgSrc: string;
  type: string;
};

export const categories: Record<BodyPartId, Category[]> = {
  spine: [
    { name: "行動輪椅", imgSrc: `${layoutPath}/type-wheelChair.webp`, type: "wheelChair" },
    { name: "臥室寢具", imgSrc: `${layoutPath}/type-bed.webp`, type: "bed" },
  ],
  waist: [
    { name: "拐杖步行", imgSrc: `${layoutPath}/type-crutch.webp`, type: "crutch" },
    { name: "行動輪椅", imgSrc: `${layoutPath}/type-wheelChair.webp`, type: "wheelChair" },
    { name: "呼吸照護", imgSrc: `${layoutPath}/type-oxygen.webp`, type: "oxygen" },
  ],
  hip: [
    { name: "輪椅輔助", imgSrc: `${layoutPath}/type-wheelChair.webp`, type: "wheelChair" },
    { name: "拐杖步行", imgSrc: `${layoutPath}/type-crutch.webp`, type: "crutch" },
  ],
  knee: [{ name: "拐杖步行", imgSrc: `${layoutPath}/type-crutch.webp`, type: "crutch" }],
  ankle: [
    { name: "行動輪椅", imgSrc: `${layoutPath}/type-wheelChair.webp`, type: "wheelChair" },
    { name: "拐杖步行", imgSrc: `${layoutPath}/type-crutch.webp`, type: "crutch" },
  ],
  neck: [
    { name: "行動輪椅", imgSrc: `${layoutPath}/type-wheelChair.webp`, type: "wheelChair" },
    { name: "臥室寢具", imgSrc: `${layoutPath}/type-bed.webp`, type: "bed" },
  ],
  shoulder: [
    { name: "行動輪椅", imgSrc: `${layoutPath}/type-wheelChair.webp`, type: "wheelChair" },
    { name: "臥室寢具", imgSrc: `${layoutPath}/type-bed.webp`, type: "bed" },
  ],
  arm: [
    { name: "行動輪椅", imgSrc: `${layoutPath}/type-wheelChair.webp`, type: "wheelChair" },
  ],
  wrist: [{ name: "拐杖步行", imgSrc: `${layoutPath}/type-crutch.webp`, type: "crutch" }],
};
