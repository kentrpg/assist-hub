import { isAuthenticationUnsuccessful } from "@/helpers/api/status";
import { validateMethod } from "@/helpers/api/validateMethod";
import { setAuthCookie } from "@/helpers/cookies";
import { RequestGetLineCallbackQueryType } from "@/types/getLinecallback";
import getLineCallback from "@/utils/api/getLineCallback";
import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";

export default async function handler(
  req: NextApiRequest & { query: RequestGetLineCallbackQueryType },
  res: NextApiResponse<Result>,
) {
  const methodError = await validateMethod("GET")(req, res);
  if (methodError) return methodError;

  const result = await getLineCallback(req.query);

  if (isAuthenticationUnsuccessful(result)) {
    return res.json(result);
  }

  const { data, ...rest } = result;
  const { jwtToken, ...userData } = data || {};

  if (jwtToken) {
    const identity = data?.IsAdmin ? "admin" : "user";
    const cookieHeaders = setAuthCookie(identity, jwtToken);
    res.setHeader("Set-Cookie", cookieHeaders);
  }

  return res.json({
    ...rest,
    data: userData,
  });
}
