import { Error } from "@/types/apiRoutes";

export type PaymentStatus = "loading" | "success" | "failed" | "invalid";

export type PaymentResult = {
  statusCode: number;
  status: boolean;
  message: string;
  error: Error | null;
};
