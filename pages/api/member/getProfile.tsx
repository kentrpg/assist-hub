import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import getProfile from "@/utils/api/member/getProfile";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const result = await getProfile(req.cookies.token || "");
  return res.json(result);
}
