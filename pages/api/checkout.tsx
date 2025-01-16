import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/checkout";
import checkout from "@/utils/api/checkout";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  console.log("req.body", req.body);
  const result = await checkout(req.cookies.token || "", req.body);
  console.log("result", result);

  return res.json(result);
}
