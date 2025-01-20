import { Error } from "@/types/apiRoutes";

export const ResultPostInquiry = {
  statusCode: 0,
  status: true,
  message: "",
};

export type ResultPostInquiryType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: undefined;
  error: Error | null;
};

export type RequestPostInquiryType = {
  productIds: number[];
  level: string;
  additionalInfo: string;
};
