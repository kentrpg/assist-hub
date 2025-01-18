import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import signUp from "@/utils/api/auth/register";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>,
) {
  const result = await signUp(req.body);

  return res.json(result);
}
