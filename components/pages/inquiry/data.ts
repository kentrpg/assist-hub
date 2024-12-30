import type { Color, ColorsType } from "@/types/uiProps";

export const inquiryCardColors: ColorsType[] = ["accent", "primary", "secondary", "secondary", "accent", "primary", "primary", "secondary", "accent"];

export type Feature = {
  id: string;
  text: string;
};

type BaseInquiryCard = {
  id: string;
  name: string;
  description: string;
  price: number;
  imgSrc: string;
  features: Feature[];
};

export type InquiryCardProps = BaseInquiryCard & Color;

export const inquiryCards: BaseInquiryCard[] = [
  {
    id: "1",
    name: "電動輪椅",
    description: "輕量化鋁合金金屬設計",
    price: 2000,
    imgSrc: "device1.png",
    features: [
      { id: "1-1", text: "支撐性高" },
      { id: "1-2", text: "輕量化設計" },
      { id: "1-3", text: "S曲面型坐墊" }
    ]
  },
  {
    id: "2", 
    name: "腋下拐",
    description: "輕量化鋁合金金屬設計",
    price: 1000,
    imgSrc: "device2.png",
    features: [
      { id: "2-1", text: "支撐性高" },
      { id: "2-2", text: "輕量化設計" },
      { id: "2-3", text: "可調節適合高度" },
    ]
  },
  {
    id: "3",
    name: "電動輪椅",
    description: "輕量化鋁合金金屬設計",
    price: 2000,
    imgSrc: "device3.png",
    features: [
      { id: "3-1", text: "支撐性高" },
      { id: "3-2", text: "輕量化設計" },
    ]
  },
  {
    id: "4",
    name: "電動輪椅",
    description: "輕量化鋁合金金屬設計",
    price: 2000,
    imgSrc: "device3.png",
    features: [
      { id: "4-1", text: "支撐性高" },
      { id: "4-2", text: "輕量化設計" },
      { id: "4-3", text: "S曲面型坐墊" }
    ]
  },
  {
    id: "5",
    name: "電動輪椅",
    description: "輕量化鋁合金金屬設計輕量化鋁合金金屬設計輕量化鋁合金金屬設計",
    price: 2000,
    imgSrc: "device3.png",
    features: [
      { id: "5-1", text: "支撐性高" },
      { id: "5-2", text: "輕量化設計" },
      { id: "5-3", text: "S曲面型坐墊" }
    ]
  }
];

export type InquiryStepCardProps = {
  step: "01" | "02" | "03";
  title: string;
  imgSrc: string;
} & Color;

export const inquiryStepCards: InquiryStepCardProps[] = [
  {
    step: "01",
    title: "節省選購時間",
    imgSrc: "inquiry-nosignin-1.png",
    $color: "primaryLight",
  },
  {
    step: "02",
    title: "量身打造專屬建議",
    imgSrc: "inquiry-nosignin-2.png",
    $color: "accentLight",
  },
  {
    step: "03",
    title: "一對一免費專業諮詢",
    imgSrc: "inquiry-nosignin-3.png",
    $color: "secondaryLight",
  },
];