import { ColorsType } from "@/types/uiProps";
import type { IconType } from "react-icons";
import {
  MdPayment,
  MdLocalShipping,
  MdCheckCircle,
  MdPendingActions,
  MdInventory,
  MdTaskAlt,
  MdPaid,
  MdHomeWork,
  MdStorefront,
  MdAssignmentTurnedIn,
  MdCancelPresentation,
  MdTimer,
  MdAssignmentReturn,
  MdAttachMoney,
} from "react-icons/md";
import { OrderDataType } from "@/types/getAdminOrders";

export type ProcessedOrderData = {
  [key: string]: {
    data: OrderDataType[];
    count: number;
  };
};

export type OrderListProps = {
  data: ProcessedOrderData;
};

export type OrderStatus = {
  key: string;
  label: string;
  count?: number;
  icon: IconType;
  type: "orderStatus" | "shippingStatus" | "all";
};

export type ShippingStatus = string[];

export type Order = {
  id: string;
  productName: string;
  productCode: string;
  rentalStart: string;
  rentalEnd: string;
  quantity: number;
  total: number;
  deliveryMethod: string;
  orderStatus: string;
  shippingStatus: string;
};

export const shippingStatusMapping: { [key: string]: string } = {
  delivery: "宅配",
  store: "店取",
};

export type TabType = "orderStatus" | "shippingStatus" | "all" | undefined;

export const filterOrderMapping: { [key: string]: IconType | undefined } = {
  "全部": undefined,
  "未付款": MdPayment,
  "已付款": MdAttachMoney,
  "租賃中": MdTimer,
  "已結案": MdTaskAlt,
  "待出貨": MdInventory,
  "運送中": MdLocalShipping,
  "已抵達": MdHomeWork,
  "待取貨": MdStorefront,
  "已取貨": MdAssignmentTurnedIn,
  "已歸還": MdAssignmentReturn,
  "已取消": MdCancelPresentation,
};

export const orderStatusValues = ["未付款", "已付款", "已結案", "租賃中"];
export const shippingValues = ["待出貨", "運送中", "已抵達", "待取貨", "已取貨", "已歸還", "已取消"];
export type OrderStatusType = typeof orderStatusValues[number];
export type ShippingStatusType = typeof shippingValues[number];

export const shippingStatusColorMapping: Record<ShippingStatusType, ColorsType> = {
  "待出貨": "accent",
  "待取貨": "accent",
  "運送中": "secondary",
  "已抵達": "primary",
  "已取貨": "primary",
  "已歸還": "textMuted",
  "已取消": "textMuted",
} satisfies Record<ShippingStatusType, ColorsType>;

export const orderStatusColorMapping: Record<OrderStatusType, { color: ColorsType; bgColor: ColorsType }> = {
  "未付款": { color: "accent", bgColor: "accentLight" },
  "已付款": { color: "grey300", bgColor: "secondaryBg" },
  "租賃中": { color: "primary", bgColor: "primaryLight" },
  "已結案": { color: "textMuted", bgColor: "secondaryBg" },
} satisfies Record<OrderStatusType, { color: ColorsType; bgColor: ColorsType }>;
