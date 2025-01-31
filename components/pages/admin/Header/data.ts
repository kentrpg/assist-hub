import { IconType } from "react-icons";

export type TabItem = {
  label: string;
  icon: IconType;
  count?: number;
};

export type HeaderProps = {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const countSelects = [10, 20, 30];
