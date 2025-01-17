import type { NextApiRequest, NextApiResponse } from "next";
import { ResultGetMemberOrderType } from "@/types/getOrder";
import getOrder from "@/utils/api/member/getOrder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultGetMemberOrderType>
) {
  console.log("req.getOrder", req.body, req.body.orderId);

  const result = await getOrder(req.cookies.token || "", req.body.orderId);

  console.log("getOrder result", result);

  return res.json(result);
}
