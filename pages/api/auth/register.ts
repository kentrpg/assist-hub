import type { NextApiRequest, NextApiResponse } from "next";
import { AuthResponse } from "@/types/apiRoutes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse> // 暫時省略 token，正式 API 測試再加回
) {

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_5XCAMP}/users`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: req.body }),
      }
    );
    const data: AuthResponse = await response.json();
    return res.status(response.status).json({
      status: response.status,
      message: data.message || (response.ok ? '註冊成功' : '註冊失敗'),
    });
  } catch (error) {
    console.error('註冊錯誤:', error);
    return res.status(500).json({
      status: 500,
      message: '伺服器錯誤'
    });
  }
}
