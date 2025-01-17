import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize, parse } from 'cookie';
import { AuthResponse } from "@/types/apiRoutes";
import { BASE_URL } from '@/constants/environment';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) {
  const cookies = parse(req.headers.cookie || '');
  const token = cookies.token;

  try {
    const response = await fetch(
      `${BASE_URL}/users/sign_out`,
      {
        method: "DELETE",
        headers: token ? {
          Authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
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