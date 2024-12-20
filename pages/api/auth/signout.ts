import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize, parse } from 'cookie';
import { AuthResponse } from "@/types/apiRoutes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) {
  const cookies = parse(req.headers.cookie || '');
  const token = cookies.token;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_5XCAMP}/users/sign_out`,
      {
        method: "DELETE",
        headers: token ? {
          Authorization: token
        } : undefined,
      }
    );

    const data: AuthResponse = await response.json();
    if (response.ok) {
      res.setHeader('Set-Cookie', serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'strict',
      }));
    }
    return res.status(response.status).json({
      status: response.status,
      message: data.message || (response.ok ? "登出成功" : "登出失敗"),
    });
  } catch (error) {
    console.error("登入錯誤:", error);
    console.error('註冊錯誤:', error);
    return res.status(500).json({
      status: 500,
      message: '伺服器錯誤'
    });
  }
}