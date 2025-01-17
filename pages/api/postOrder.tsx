import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import postOrder from "@/utils/api/checkout";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  console.log("req.body", req.body);
  const result = await postOrder(req.cookies.token || "", req.body);
  console.log("result", result);

  return res.json(result);
}
