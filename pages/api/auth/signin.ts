import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from 'cookie';
import { AuthResponse } from "@/types/apiRoutes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) {

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_5XCAMP}/users/sign_in`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user": req.body }),
      }
    );

    const token = response.headers.get('authorization');
    const data: AuthResponse = await response.json();
    if (response.ok) {
      res.setHeader('Set-Cookie', serialize('token', token || "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'strict',
      }));
    }
    return res.status(response.status).json({
      status: response.status,
      message: data.message || (response.ok ? "登入成功" : "登入失敗"),
    });

  } catch (error) {
    console.error("登入錯誤:", error);
  }
}
