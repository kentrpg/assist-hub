import type { InquiryInfoProps } from "@/components/pages/inquiry/Summary/data";
import type { Color, ColorsType } from "@/types/uiProps";

export const inquiryCardColors: ColorsType[] = ["accent", "primary", "secondary", "secondary", "accent", "primary", "primary", "secondary", "accent"];

export type InquiryInfo = {
  inquiryCode: string;
  createdStamp: string;
  level: string;
  additionalInfo?: string;
};

// for inquiryInfo section
export const inquiryInfo: InquiryInfoProps = {
  inquiryCode: "AKC833",
  createdStamp: "2024/10/04",
  level: "具平地跑跳能力",
  additionalInfo: "騎機車不慎摔傷，有撞到腳踝，有時候走路會痛。"
};

export type InquiryDetailProps = {
  data: InquiryInfo;
};
