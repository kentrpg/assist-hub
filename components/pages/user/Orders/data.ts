type OrderDetails = {
  quantity: number;
  productName: string;
  productDes: string;
  productImgSrc: string;
  productImgAlt: string;
  rent: number;
  deposit: number;
  fee: number;
  feeDeposit: number;
  finalAmount: number;
  rentDate: string;
  rentStamp: string;
  returnDate: string;
  returnStamp: string;
};

export type Order = {
  orderId: number;
  orderStatus: string;
  shippingStatus: string;
  orderCode: string;
  createdDate: string;
  createdStamp: string;
  shipping: string;
  details: OrderDetails;
};
