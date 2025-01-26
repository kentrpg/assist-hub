import { isAuthenticationUnsuccessful, isValid } from "@/helpers/api/status";
import { validateMethod } from "@/helpers/api/validateMethod";
import { setAuthCookie } from "@/helpers/cookies";
import {
  RequestGetLineCallbackQueryType,
  ResultGetLineCallback,
} from "@/types/getLinecallback";
import getLineCallback from "@/utils/api/getLineCallback";
import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";

export default async function handler(
  req: NextApiRequest & { query: RequestGetLineCallbackQueryType },
  res: NextApiResponse<Result>,
) {
  const methodError = await validateMethod("GET")(req, res);
  if (methodError) return methodError;

  const queryString = req.url?.split("?")[1] || "";
  const result = await getLineCallback(queryString);

  if (isAuthenticationUnsuccessful(result)) {
    return res.json(result);
  }
  
  const cookieHeader = setAuthCookie(result.data.jwtToken);
  res.setHeader("Set-Cookie", cookieHeader);

  const { data, ...rest } = result;
  const { jwtToken, ...userData } = data || {};

  return res.json({
    ...rest,
    data: userData,
  });
}
