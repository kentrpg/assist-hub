import { IconType } from "react-icons";
import { TabType } from "../OrderList/data";
import { OrderDataType } from "@/types/getAdminOrders";

export type TabItem = {
  // label: string;
  // icon: IconType;
  // count?: number;
  // type?: TabType;
  data: OrderDataType[];
  count: number;
};

export type HeaderProps = {
  tabs: { [key: string]: TabItem };
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const countSelects = [10, 20, 30];
