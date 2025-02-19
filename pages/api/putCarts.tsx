import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import putCarts from "@/utils/api/putCarts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const result = await putCarts(req.cookies.token || "", req.body);

  return res.json(result);
}
