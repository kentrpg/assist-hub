import { ApiResponse } from "./types";

/**
 * 檢查 API 回應的 HTTP 狀態是否為 200
 */
export const isOk = <T>(response: ApiResponse<T>): boolean => {
  return response.statusCode === 200;
};

/**
 * 檢查 API 回應是否成功且資料有效
 * 大部分失敗是 statusCode 非 200(例如 404) + status 為 false
 */
export const isValid = <T>(response: ApiResponse<T>): boolean => {
  return isOk(response) && response.status === true;
};

/**
 * 檢查 API 回應是否包含錯誤
 */
export const hasError = <T>(response: ApiResponse<T>): boolean => {
  return !Object.is(response.error, null);
}; 