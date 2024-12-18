import type { NextApiRequest, NextApiResponse } from "next";

export type SignInResponse = {
  status: boolean | number;
  message: string;
  token?: string;
  // TBD: token、exp 是六角 API 回傳的格式
  // exp?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignInResponse>
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/sign_in`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data: SignInResponse = await response.json();
    switch (response.status) {
      case 200:
        res.setHeader(
          "Set-Cookie",
          `token=${data.token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`
        );
        return res.status(200).json({
          status: 200,
          message: "登入成功",
        });
      case 401:
        return res.status(401).json({
          status: 401,
          message: data.message || "帳號或密碼錯誤",
        });
      case 404:
        return res.status(404).json({
          status: 404,
          message: data.message || "用戶不存在",
        });
      default:
        return res.status(response.status).json({
          status: response.status,
          message: data.message || "發生未知錯誤",
        });
    }
  } catch (error) {
    console.error("登入錯誤:", error);
  }
}
