import type { NextApiRequest, NextApiResponse } from "next";
import { ResultGetInquiryType } from "@/types/getInquiry";
import getInquiry from "@/utils/api/getInquiry";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultGetInquiryType>,
) {
  const { inquiryId } = req.query;
  const result = await getInquiry(inquiryId as string);

  return res.json(result);
}
