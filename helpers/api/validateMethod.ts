import { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

/**
 * 驗證 API 請求方法
 * @param allowedMethod 允許的 HTTP 方法
 * @returns null 如果方法有效，否則返回錯誤響應
 */
export const validateMethod = (allowedMethod: HttpMethod) => {
  return async (req: NextApiRequest, res: NextApiResponse<Result>) => {
    if (req.method !== allowedMethod) {
      return res.status(405).json({
        statusCode: 405,
        status: false,
        message: `只允許 ${allowedMethod} 請求`,
        error: {
          code: 405,
          message: `只允許 ${allowedMethod} 請求`,
        },
      });
    }
    return null;
  };
}; 