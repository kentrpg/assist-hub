export type OrderData = {
  orderStatus: string;
  shippingStatus: string;
  orderCode: string;
  createdDate: string;
  createdStamp: string;
  note: string;
  shipping: string;
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
    quantity: number;
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
    payment: string;
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

export const quantitySelects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
