import { IconType } from "react-icons";
import { TabType } from "../OrderList/data";

export type TabItem = {
  label: string;
  icon: IconType;
  count?: number;
  type: TabType;
};

export type HeaderProps = {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tab: string, type: TabType) => void;
};

export const countSelects = [10, 20, 30];
