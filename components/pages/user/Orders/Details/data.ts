type OrderDetails = {
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

type shippingInfo = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

export type OrderData = {
  orderStatus: string;
  shippingStatus: string;
  orderCode: string;
  createdDate: string;
  createdStamp: string;
  note: string;
  shipping: string;
  shippinginfo: shippingInfo;
  details: OrderDetails;
};
