import { ReactNode } from "react";
import LinnPayImage from "./LinnPayImage";

// 店家資訊型別
export type StoreInfoType = {
  phone: string;
  businessHours: string;
  address: string;
};

// 收件人資訊型別
export type RecipientInfo = {
  name: string;
  phone: string;
  email: string;
};

// 商品資訊型別
export type ProductInfo = {
  id: string;
  name: string;
  quantity: number;
  rentDate: string;
  returnDate: string;
  imageUrl: string;
  imageAlt: string;
};

// 費用明細型別
export type CostDetail = {
  rental: number;
  deposit: number;
  shipping: number;
};

// Checkout 狀態型別
export type CheckoutState = {
  selectedPickupMethod: PickupMethodValue;
  selectedPayment: PaymentMethodValue;
  agreeRentalRules: boolean;
  agreeTermsPrivacy: boolean;
  recipientInfo: RecipientInfo;
};

export type PaymentMethodValue = "credit-card" | "transfer" | "line-pay";
export type PickupMethodValue = "store" | "delivery";

// 預設值
export const defaultPayment: PaymentMethodValue = "line-pay";
export const defaultPickupMethod: PickupMethodValue = "store";

export const recipientData: RecipientInfo = {
  name: "",
  phone: "",
  email: "",
};

const storeData: StoreInfoType = {
  phone: "0912-345678",
  businessHours: "08:00-22:00（週一公休）",
  address: "高雄市新興區",
};

const productData = {
  product: {
    imgSrc: "/images/device1.png",
    imgAlt: "精品輪椅",
    title: "精品輪椅",
    details: {
      quantity: 1,
      rentDate: "2025/02/06",
      returnDate: "2025/03/05",
    },
  },
  costs: {
    rent: 1000,
    deposit: 500,
    delivery: 0,
  },
  amount: 1500,
};

export const initialCheckoutState: CheckoutState = {
  selectedPickupMethod: defaultPickupMethod,
  selectedPayment: defaultPayment,
  agreeRentalRules: false,
  agreeTermsPrivacy: false,
  recipientInfo: recipientData,
};

// Shipping

export type StoreInfoDisplay = {
  label: string;
  value: string;
};

export const storeInfoDisplay: StoreInfoDisplay[] = [
  {
    label: "店家電話",
    value: storeData.phone,
  },
  {
    label: "營業時間",
    value: storeData.businessHours,
  },
  {
    label: "地址",
    value: storeData.address,
  },
];

// Payment

type PaymentMethod = {
  id: string;
  value: PaymentMethodValue;
  icon: string | ReactNode;
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: "credit-card",
    value: "credit-card",
    icon: "信用卡/簽帳金融卡",
  },
  {
    id: "transfer",
    value: "transfer",
    icon: "銀行匯款或轉帳",
  },
  {
    id: "line-pay",
    value: "line-pay",
    icon: <LinnPayImage />,
  },
];

// Summary

export type ProductDisplay = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  details: {
    label: string;
    value: string | number;
  }[];
};

export type CostDisplay = {
  label: string;
  value: number;
};

export const summaryDisplay: ProductDisplay = {
  image: {
    src: productData.product.imgSrc,
    alt: productData.product.imgAlt,
    width: 80,
    height: 80,
  },
  title: productData.product.title,
  details: [
    {
      label: "數量",
      value: `x${productData.product.details.quantity}`,
    },
    {
      label: "租借日期",
      value: productData.product.details.rentDate,
    },
    {
      label: "歸還日期",
      value: productData.product.details.returnDate,
    },
  ],
};

export const costsDisplay: CostDisplay[] = [
  {
    label: "租金",
    value: productData.costs.rent,
  },
  {
    label: "押金",
    value: productData.costs.deposit,
  },
  {
    label: "運費",
    value: productData.costs.delivery,
  },
];

export const totalCost: CostDisplay = {
  label: "總計",
  value: productData.amount,
};
