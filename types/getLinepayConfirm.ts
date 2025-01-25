import { Error } from "@/types/apiRoutes";

export type RequestGetLinepayConfirmType = {
  transactionId: string;
  finalAmount: string;
};

export const ResultGetLinepayConfirm = {
  "statusCode": 400,
  "status": false,
  "message": "LinePay訂單確認失敗"
};

export type ResultGetLinepayConfirmType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: undefined;
  error: Error | null;
};
