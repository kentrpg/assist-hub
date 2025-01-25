import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import getLinepayConfirm from "@/utils/api/line/getLinepayConfirm";
import { validateMethod } from "@/helpers/api/validateMethod";
import { RequestGetLinepayConfirmQueryType } from "@/types/getLinepayConfirm";

export default async function handler(
  req: NextApiRequest & { query: RequestGetLinepayConfirmQueryType },
  res: NextApiResponse<Result>,
) {
  const methodError = await validateMethod("GET")(req, res);
  if (methodError) return methodError;

  const { transactionId, orderId } = req.query;

  const result = await getLinepayConfirm({
    transactionId,
    orderId: Number(orderId),
  });

  return res.json(result);
}
