import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/checkout";
import checkout from "@/utils/api/checkout";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>,
) {
  const result = await checkout(req.body);

  return res.json(result);
}
