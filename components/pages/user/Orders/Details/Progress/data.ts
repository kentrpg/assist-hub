import { ReactNode } from "react";
import React from "react";
import { MdListAlt, MdLocalShipping, MdHouse } from "react-icons/md";

export type ShippingState = string;

type Step = {
  label: ShippingState;
  isCompleted(label: ShippingState): boolean;
  icon(currentState: ShippingState): ReactNode;
};

export const steps: Step[] = [
  {
    label: "待出貨",
    isCompleted: (currentState: ShippingState) => currentState === "待出貨",
    icon: (currentState: ShippingState) =>
      React.createElement(MdListAlt, {
        size: 32,
        color: currentState === "待出貨" ? "#2ECC71" : "#FFCC1A",
      }),
  },
  {
    label: "運送中",
    isCompleted: (currentState: ShippingState) => currentState === "運送中",
    icon: (currentState: ShippingState) =>
      React.createElement(MdLocalShipping, {
        size: 32,
        color:
          currentState === "運送中" || currentState === "已抵達"
            ? "#FFCC1A"
            : "#FFF3D3",
      }),
  },
  {
    label: "已抵達",
    isCompleted: (currentState: ShippingState) => currentState === "已抵達",
    icon: (currentState: ShippingState) =>
      React.createElement(MdHouse, {
        size: 32,
        color: currentState === "已抵達" ? "#FFCC1A" : "#FFF3D3",
      }),
  },
];
