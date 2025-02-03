import { MdCheckCircle, MdMarkEmailUnread } from "react-icons/md";
import type { IconType } from "react-icons";
import { InquiriesDataType } from "@/types/getAdminInquiries";

export const filterSuggestMapping: { [key: string]: IconType | undefined } = {
  "全部": undefined,
  "未回覆": MdMarkEmailUnread,
  "已回覆": MdCheckCircle,
};

export type ProcessedSuggestData = {
  [key: string]: {
    data: InquiriesDataType[];
    count: number;
  };
};

export type SuggestListProps = {
  data: ProcessedSuggestData;
};