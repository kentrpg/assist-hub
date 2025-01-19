export const ResultPutCarts = {
  statusCode: 0,
  status: true,
  message: "成功編輯該購物車清單(quantity|period|rentStamp)",
};

export type ResultPutCartsType = typeof ResultPutCarts;

type RequestPutCartsBase = {
  cartId: number;
};

type RequestPutQuantityCarts = RequestPutCartsBase & {
  quantity: number;
};

type RequestPutPeriodCarts = RequestPutCartsBase & {
  period: number;
};

type RequestPutRentStampCarts = RequestPutCartsBase & {
  rentStamp: number;
};

export type RequestPutCarts =
  | RequestPutQuantityCarts
  | RequestPutPeriodCarts
  | RequestPutRentStampCarts;
