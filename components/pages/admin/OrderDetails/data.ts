import { OrderStatusType, ShippingStatusType } from "../OrderList/data";

export type OrderData = {
  orderStatus: string;
  shippingStatus: string;
  orderCode: string;
  createdDate: string;
  createdStamp: string;
  note: string;
  shipping: ShippingType;
  shippinginfo: {
    name: string;
    phone: string;
    email: string;
    address: string;
    addressZIP: string;
    addressCity: string;
    addressDistrict: string;
    AddressDetail: string;
  };
  details: {
    quantity: QuantityType;
    productName: string;
    productDes: string;
    productImgSrc: string;
    productImgAlt: string;
    rent: number;
    deposit: number;
    fee: number;
    finalAmount: number;
    period: number;
    rentDate: string;
    rentStamp: string;
    returnDate: string;
    returnStamp: string;
    payment: PaymentType;
  };
  member: {
    memberId: number;
    name: string;
    email: string;
    lineId: string;
    phone: string;
  };
};

export type OrderItemType = {
  productName: string
  productCode: string
  rentPeriod: {
    start: string
    end: string
  }
  amount: {
    rent: number
    deposit: number
    shipping: number
    total: number
  }
  payment: string
};

export type UserInfoType = {
  account: string
  lineId: string
  phone: string;
};

export type ShippingInfoType = {
  name: string;
  phone: string
  email: string
  address: {
    zipCode: string
    city: string
    district: string
    detail: string
  }
};

export type ToastType = {
  show: boolean;
  message: string;
  type: "success" | "error";
  isLeaving: boolean;
};

export enum Quantity {
  one = "1",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10"
};

export enum Payment {
  transfer = "transfer",
  creditCard = "creditCard",
  linePay = "LinePay"
};

export enum Shipping {
  store = "store",
  delivery = "delivery"
};

export const quantitySelects = Object.values(Quantity);
export const paymentSelects = Object.values(Payment);
export const shippingSelects = Object.values(Shipping);

export type QuantityType = Quantity;
export type PaymentType = Payment;
export type ShippingType = Shipping;

export const shippingStatusMapping = {
  [Shipping.store]: "店取",
  [Shipping.delivery]: "宅配"
};

export const paymentStatusMapping = {
  [Payment.transfer]: "轉帳",
  [Payment.creditCard]: "信用卡",
  [Payment.linePay]: "LinePay"
};

export type OrderDetailsInputs = {
  [key: string]: string | number;
  orderStatus: OrderStatusType;
  shippingStatus: ShippingStatusType;
  rentStamp: string;
  returnStamp: string;
  shipping: ShippingType;
  rent: number;
  fee: number;
  deposit: number;
  payment: PaymentType;
  quantity: QuantityType;
  name: string;
  phone: string;
  email: string;
  addressZIP: string;
  addressCity: string;
  addressDistrict: string;
  addressDetail: string;
};
