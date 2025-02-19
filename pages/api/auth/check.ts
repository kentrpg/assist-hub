import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import check from "@/utils/api/auth/check";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const result = await check(req.cookies.token || "");
  return res.json(result);
}
