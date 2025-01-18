import type { NextApiRequest, NextApiResponse } from "next";
import postCarts from "@/utils/api/postCarts";
import { Result } from "@/types/postOrder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const result = await postCarts(req.cookies.token || "", req.body);
  return res.json(result);
}
