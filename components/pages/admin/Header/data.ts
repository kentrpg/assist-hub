import { OrderDataType } from "@/types/getAdminOrders";
import { InquiriesDataType } from "@/types/getMemberInquiries";
import { filterOrderMapping } from "../OrderList/data";
import { filterSuggestMapping } from "../SuggestList/data";

export type TabItem = {
  data: OrderDataType[] | InquiriesDataType[];
  count: number;
};

export type HeaderProps = {
  tabs: { [key: string]: TabItem };
  activeTab: string;
  onTabChange: (tab: string) => void;
  iconMapping: typeof filterSuggestMapping | typeof filterOrderMapping;
};

export const countSelects = [10, 20, 30];
