import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import getToken from "@/utils/api/getToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>,
) {
  const token = req.cookies.token || "";
  const result = await getToken(token);

  return res.json(result);
}
