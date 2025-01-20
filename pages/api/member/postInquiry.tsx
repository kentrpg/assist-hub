import type { NextApiRequest, NextApiResponse } from "next";
import { ResultPostInquiryType } from "@/types/postInquiry";
import postInquiry from "@/utils/api/member/postInquiry";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultPostInquiryType>
) {
  const result = await postInquiry(req.cookies.token || "", req.body);

  return res.json(result);
}
