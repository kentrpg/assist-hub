import type { InquiryInfoProps } from "@/components/ui/InquiryDetail/data";
import type { Color, ColorsType } from "@/types/uiProps";

export const inquiryCardColors: ColorsType[] = ["accent", "primary", "secondary", "secondary", "accent", "primary", "primary", "secondary", "accent"];

type BaseInquiryCard = {
  id: string;
  name: string;
  description: string;
  price: number;
  imgSrc: string;
  features: string[];
};

export type InquiryCardProps = Omit<BaseInquiryCard, "id"> & Color;

export const draftInquiry: BaseInquiryCard[] = [
  {
    id: "1",
    name: "電動輪椅",
    description: "輕量化鋁合金金屬設計",
    price: 2000,
    imgSrc: "device1.png",
    features: ["支撐性高", "輕量化設計", "S曲面型坐墊"],
  },
  {
    id: "2",
    name: "腋下拐",
    description: "輕量化鋁合金金屬設計",
    price: 1889.87,
    imgSrc: "device2.png",
    features: ["支撐性高", "輕量化設計", "可調節適合高度"],
  }
];

export const submittedInquiry: BaseInquiryCard[] = [
  {
    id: "1",
    name: "電動輪椅",
    description: "輕量化鋁合金金屬設計",
    price: 2000,
    imgSrc: "device1.png",
    features: ["支撐性高", "輕量化設計", "S曲面型坐墊"],
  },
  {
    id: "2",
    name: "腋下拐",
    description: "輕量化鋁合金金屬設計",
    price: 1000,
    imgSrc: "device2.png",
    features: ["支撐性高", "輕量化設計", "可調節適合高度"],
  },
  {
    id: "3",
    name: "電動輪椅",
    description: "輕量化鋁合金金屬設計",
    price: 2000,
    imgSrc: "device3.png",
    features: ["支撐性高", "輕量化設計"],
  },
  {
    id: "4",
    name: "電動輪椅",
    description: "輕量化鋁合金金屬設計",
    price: 2000,
    imgSrc: "device3.png",
    features: ["支撐性高", "輕量化設計", "S曲面型坐墊"],
  },
  {
    id: "5",
    name: "電動輪椅",
    description: "輕量化鋁合金金屬設計輕量化鋁合金金屬設計輕量化鋁合金金屬設計",
    price: 2000,
    imgSrc: "device3.png",
    features: ["支撐性高", "輕量化設計", "S曲面型坐墊"],
  }
];

// for inquiryInfo section
export const inquiryInfo: InquiryInfoProps = {
  "orderId": "AKC833",
  "createdDate": "2024/10/04",
  "actionAssessment": "具平地跑跳能力",
  "description": "騎機車不慎摔傷，有撞到腳踝，有時候走路會痛。"
};

export type InquiryDetailProps = {
  data: InquiryInfoProps;
  mapping: Record<keyof InquiryInfoProps, string>;
};

// for InquiryStep page

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
