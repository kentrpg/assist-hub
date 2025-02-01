import { ColorsType } from "@/types/uiProps";
import type { IconType } from "react-icons";
import {
  MdPayment,
  MdLocalShipping,
  MdCheckCircle,
  MdPendingActions,
  MdInventory,
} from "react-icons/md";
import { OrderDataType } from "@/types/getAdminOrders";

export type OrderStatus = {
  key: string;
  label: string;
  count?: number;
  icon: IconType;
};

export type OrderListProps = {
  data: OrderDataType[];
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

export const orderStatuses: OrderStatus[] = [
  { key: "all", label: "全部", count: 100, icon: MdCheckCircle },
  { key: "outstanding", label: "未付款", count: 2, icon: MdPayment },
  { key: "paid", label: "已付款", count: 2, icon: MdPayment },
  { key: "completed", label: "已結案", count: 32, icon: MdCheckCircle },
  { key: "pending", label: "待出貨", icon: MdPendingActions },
  { key: "shipping", label: "運送中", count: 12, icon: MdLocalShipping },
  { key: "delivered", label: "已抵達", count: 56, icon: MdLocalShipping },
  { key: "pickup", label: "待取貨", count: 5, icon: MdPendingActions },
  { key: "picked", label: "已取貨", count: 6, icon: MdCheckCircle },
  { key: "returned", label: "已歸還", count: 6, icon: MdInventory },
  { key: "cancelled", label: "已取消", count: 2, icon: MdCheckCircle },
];

export const orderStatusValues = ["未付款", "已付款", "已結案"];
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
  "已結案": { color: "textMuted", bgColor: "secondaryBg" },
} satisfies Record<OrderStatusType, { color: ColorsType; bgColor: ColorsType }>;

export const mockOrders: Order[] = [
  {
    id: "202412040001",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "宅配",
    orderStatus: "已付款",
    shippingStatus: "待出貨",
  },
  {
    id: "202412040002",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "宅配",
    orderStatus: "未付款",
    shippingStatus: "待出貨",
  },
  {
    id: "202412040003",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "宅配",
    orderStatus: "已付款",
    shippingStatus: "已抵達",
  },
  {
    id: "202412040004",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "宅配",
    orderStatus: "已付款",
    shippingStatus: "運送中",
  },
  {
    id: "202412040005",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "宅配",
    orderStatus: "已結案",
    shippingStatus: "已歸還",
  },
  {
    id: "202412040006",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "自取",
    orderStatus: "已付款",
    shippingStatus: "待出貨",
  },
  {
    id: "202412040007",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "自取",
    orderStatus: "未付款",
    shippingStatus: "待出貨",
  },
  {
    id: "202412040008",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "自取",
    orderStatus: "已付款",
    shippingStatus: "已抵達",
  },
  {
    id: "202412040009",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "自取",
    orderStatus: "已付款",
    shippingStatus: "運送中",
  },
  {
    id: "202412040010",
    productName: "[華生] 浮動座墊 B款",
    productCode: "[L2AS4005DBU0000]",
    rentalStart: "2024-12-04",
    rentalEnd: "2025-02-03",
    quantity: 1,
    total: 5000,
    deliveryMethod: "自取",
    orderStatus: "已結案",
    shippingStatus: "已歸還",
  },
];
