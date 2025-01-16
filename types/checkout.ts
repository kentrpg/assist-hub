import { Error } from "@/types/apiRoutes";

export type Response<T = unknown> = {
  statusCode: number;
  status: boolean;
  message: string;
  data?: T;
};

export type Result<T = unknown> = {
  statusCode: number;
  status: boolean;
  message: string;
  data?: T;
  error?: Error | null;
};
