import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import getLinepayConfirm from "@/utils/api/line/getLinepayConfirm";
import { validateMethod } from "@/helpers/api/validateMethod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>,
) {
  const methodError = await validateMethod("GET")(req, res);
  if (methodError) return methodError;

  const { transactionId, finalAmount } = req.query;

  const result = await getLinepayConfirm({
    transactionId: transactionId as string,
    finalAmount: finalAmount as string,
  });

  return res.json(result);
}
