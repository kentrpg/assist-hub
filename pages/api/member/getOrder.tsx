import type { NextApiRequest, NextApiResponse } from "next";
import { ResultGetMemberOrderType } from "@/types/getOrder";
import getOrder from "@/utils/api/member/getOrder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultGetMemberOrderType>,
) {
  const result = await getOrder(req.cookies.token || "", req.body.orderId);

  return res.json(result);
}
