import type { NextApiRequest, NextApiResponse } from "next";

type RegistResponse = {
  status: number;
  message: string;
  token?: string; // TBD: token 是六角 API 回傳的格式
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegistResponse>
) {
  console.log(req.body);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/sign_up`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data: RegistResponse = await response.json();
    console.log(data, response.status);
    switch (response.status) {
      case 201:
        return res.status(201).json({
          status: 201,
          message: "登入成功",
        });
      case 400:
        return res.status(400).json({
          status: 400,
          message: data.message || "此電子信箱已有註冊過",
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
