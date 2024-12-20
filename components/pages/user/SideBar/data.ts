import { ReactNode } from "react";
import React from "react";
import { MdPerson, MdChecklist, MdOutlineAccessible } from "react-icons/md";

export type ActiveTabType = "profile" | "orders" | "inquiries" | "details";

type Tab = {
  key: ActiveTabType;
  label: "基本資料" | "我的訂單" | "詢問單";
  icon: ReactNode;
  isActive: (key: ActiveTabType) => boolean;
};

export const tabs: Tab[] = [
  {
    key: "profile",
    label: "基本資料",
    icon: React.createElement(MdPerson, { size: 24 }),
    isActive: (currentTab: ActiveTabType) => currentTab === "profile",
  },
  {
    key: "orders",
    label: "我的訂單",
    icon: React.createElement(MdChecklist, { size: 24 }),
    isActive: (currentTab: ActiveTabType) =>
      currentTab === "orders" || currentTab === "details",
  },
  {
    key: "inquiries",
    label: "詢問單",
    icon: React.createElement(MdOutlineAccessible, { size: 24 }),
    isActive: (currentTab: ActiveTabType) => currentTab === "inquiries",
  },
];
