import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>,
) {
  const token = req.cookies.token;
  const isTokenValid = !!token && token !== "";

  return res.json({
    statusCode: isTokenValid ? 200 : 401,
    status: isTokenValid,
    message: isTokenValid ? "已登入" : "尚未登入",
    data: undefined,
    error: null,
  });
}
