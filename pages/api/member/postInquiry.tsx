import type { NextApiRequest, NextApiResponse } from "next";
import { ResultPostInquiryType } from "@/types/postInquiry";
import postInquiry from "@/utils/api/member/postInquiry";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultPostInquiryType>,
) {
  console.log("req.postInquiry", req.cookies.token || "", req.body);

  const result = await postInquiry(req.cookies.token || "", req.body);

  console.log("postInquiry result", result);

  return res.json(result);
}
