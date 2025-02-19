import { Error } from "@/types/apiRoutes";

export const ResultPutAdminOrder = {
  "statusCode": 200,
  "status": true,
  "message": "成功修改指定會員訂單細節"
};

export type ResultPutAdminOrderType = typeof ResultPutAdminOrder;

export type Result = {
  statusCode: number;
  status: boolean;
  message: string;
  data: undefined;
  error: Error | null;
};
