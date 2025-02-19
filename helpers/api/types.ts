import { Error } from "@/types/apiRoutes";

/**
 * API Response status helpers
 * 用於檢查 API 回應的狀態
 */

export type ApiResponse<T = unknown> = {
  statusCode: number;
  status?: boolean;
  data?: T;
  error?: Error | null;
}; 