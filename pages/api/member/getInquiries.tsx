import type { NextApiRequest, NextApiResponse } from "next";
import { ResultGetInquiriesType } from "@/types/getMemberInquiries";
import getInquiries from "@/utils/api/member/getInquiries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultGetInquiriesType>,
) {
  const result = await getInquiries(req.cookies.token || "");

  return res.json(result);
}
