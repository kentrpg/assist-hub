import { ReactNode } from "react";
import React from "react";
import { MdListAlt, MdLocalShipping, MdHouse } from "react-icons/md";

type Step = {
  label: string;
  isCompleted: boolean;
  icon: ReactNode;
};

export const steps: Step[] = [
  {
    label: "待出貨",
    isCompleted: true,
    icon: React.createElement(MdListAlt, { size: 32, color: "#2ECC71" }),
  },
  {
    label: "運送中",
    isCompleted: true,
    icon: React.createElement(MdLocalShipping, { size: 32, color: "#FFC107" }),
  },
  {
    label: "抵達",
    isCompleted: false,
    icon: React.createElement(MdHouse, { size: 32, color: "#FFF3D3" }),
  },
];
