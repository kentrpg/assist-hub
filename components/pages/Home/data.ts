import { ReactNode } from "react";
import React from "react";

import {
  MdPhonelink,
  MdCreditCard,
  MdOutlineLocalShipping,
  MdCalendarToday,
  MdAttachMoney,
} from "react-icons/md";

type Solution = {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};

export const solutions: Solution[] = [
  {
    title: "不確定需要什麼輔具",
    description:
      "提供快速適配功能，根據身體部位找到適合的輔具，無需自行判斷，可將輔具加入詢問單，由專業人員提供建議。",
    imgSrc: "/images/solution-1.webp",
    imgAlt: "",
  },
  {
    title: "身體康復之路",
    description:
      "我們提供靈活租期和多樣產品，能根據康復進程輕鬆切換不同輔具，省心又省錢。",
    imgSrc: "/images/solution-2.webp",
    imgAlt: "",
  },
  {
    title: "短期使用",
    description:
      "提供短期租賃服務，按日、週、月彈性選擇，讓輔具使用高效、經濟，不再為存放煩惱。",
    imgSrc: "/images/solution-3.webp",
    imgAlt: "",
  },
  {
    title: "購買價格太貴",
    description:
      "租賃能大幅降低使用成本，讓您以不到購買價格的一小部分，輕鬆獲得所需輔具。",
    imgSrc: "/images/solution-4.webp",
    imgAlt: "",
  },
  {
    title: "維修和保養",
    description:
      "我們的租賃服務包含免費維修和保養，租期內不需擔心任何額外費用，讓您使用更省心。",
    imgSrc: "/images/solution-5.webp",
    imgAlt: "",
  },
];

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

type Brand = {
  imgSrc: string;
  imgAlt: string;
};

export const brands: Brand[] = [
  {
    imgSrc: "images/company-1.webp",
    imgAlt: "",
  },
  {
    imgSrc: "images/company-2.webp",
    imgAlt: "",
  },
  {
    imgSrc: "images/company-3.webp",
    imgAlt: "",
  },
  {
    imgSrc: "images/company-4.webp",
    imgAlt: "",
  },
  {
    imgSrc: "images/company-5.webp",
    imgAlt: "",
  },
  {
    imgSrc: "images/company-6.webp",
    imgAlt: "",
  },
  {
    imgSrc: "images/company-7.webp",
    imgAlt: "",
  },
];

export type BodyPartId = "shoulder" | "waist" | "leg" | "knee";

export type BodyPart = {
  id: BodyPartId;
  name: string;
};

export const bodyParts: BodyPart[] = [
  { id: "shoulder", name: "脊椎" },
  { id: "waist", name: "腰部" },
  { id: "leg", name: "髖部" },
  { id: "knee", name: "膝蓋" },
];

export type Category = {
  name: string;
  imgSrc: string;
  type: string;
};

export const categories: Record<BodyPartId, Category[]> = {
  shoulder: [
    { name: "行動輪椅", imgSrc: "/images/wheelChair.webp", type: "wheelChair" },
    { name: "臥室寢具", imgSrc: "/images/bed.webp", type: "bed" },
  ],
  waist: [
    { name: "拐杖步行", imgSrc: "/images/crutch.webp", type: "crutch" },
    { name: "如廁沐浴", imgSrc: "/images/oxygen.webp", type: "oxygen" },
  ],
  leg: [
    { name: "輪椅輔助", imgSrc: "/images/wheelChair.webp", type: "wheelChair" },
  ],
  knee: [{ name: "復健支架", imgSrc: "/images/crutch.webp", type: "crutch" }],
};
