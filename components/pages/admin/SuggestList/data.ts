import { MdCheckCircle, MdPayment } from "react-icons/md";
import type { IconType } from "react-icons";

export type InquiryStatuses = {
  key: string;
  label: string;
  count?: number;
  icon: IconType;
}

export const inquiryStatuses: InquiryStatuses[] = [
  { key: "all", label: "全部", count: 3, icon: MdCheckCircle },
  { key: "isReply", label: "尚未回覆", count: 2, icon: MdPayment },
  { key: "isNotReply", label: "已回覆", count: 2, icon: MdPayment },
];
