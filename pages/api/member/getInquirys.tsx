import type { NextApiRequest, NextApiResponse } from "next";
import { ResultGetInquirysType } from "@/types/getMemberInquirys";
import getInquirys from "@/utils/api/member/getInquirys";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultGetInquirysType>,
) {
  const result = await getInquirys(req.cookies.token || "");

  return res.json(result);
}
