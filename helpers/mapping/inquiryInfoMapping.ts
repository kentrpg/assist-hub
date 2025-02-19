import { InquiryInfo } from "@/components/pages/inquiry/data";

export const inquiryInfoMapping: Record<keyof InquiryInfo, string> = {
  inquiryCode: "單號",
  createdStamp: "建立日期",
  level: "行動評估",
  additionalInfo: "補充說明",
};
