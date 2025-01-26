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

  const result = await getLinepayConfirm(req.query);

  return res.json(result);
}
