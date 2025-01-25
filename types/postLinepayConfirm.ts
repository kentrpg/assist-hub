import { Error } from "@/types/apiRoutes";

export type RequestPostLinepayConfirmType = {
  transactionId: string;
  finalAmount: string;
};

export const ResultPostLinepayConfirm = {
  statusCode: 200,
  status: true,
  message: "成功新增購物車",
};

export type ResultPostLinepayConfirmType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: undefined;
  error: Error | null;
};
