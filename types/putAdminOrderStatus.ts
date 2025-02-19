import { Error } from "@/types/apiRoutes";

export const ResultPutAdminOrderStatus = {
  "statusCode": 200,
  "status": true,
  "message": "成功編輯訂單狀態"
};

export type ResultPutAdminOrderStatusType = typeof ResultPutAdminOrderStatus;

export type RequestPutAdminOrderStatus = {
  orderId: number;
  orderStatus: string;
  shippingStatus: string;
};

export type Result = {
  statusCode: number;
  status: boolean;
  message: string;
  data: undefined;
  error: Error | null;
};
