import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import putProfile from "@/utils/api/member/putProfile";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const result = await putProfile(req.cookies.token || "", req.body);
  return res.json(result);
}
