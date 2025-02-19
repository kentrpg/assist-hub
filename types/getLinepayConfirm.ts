import { Error } from "@/types/apiRoutes";

export type RequestGetLinepayConfirmQueryType = {
  transactionId?: string;
  orderId?: string;
};

export type RequestGetLinepayConfirmType = {
  transactionId: string;
  orderId: number;
};

export const ResultGetLinepayConfirm = {
  "statusCode": 400,
  "status": false,
  "message": "LinePay訂單確認失敗"
};

export type ResponseGetLinepayConfirm = {
  statusCode: number;
  status: boolean;
  message: string;
  data: typeof ResultGetLinepayConfirm | undefined;
  error: Error | null;
};

export type ResultGetLinepayConfirmType = ResponseGetLinepayConfirm;
