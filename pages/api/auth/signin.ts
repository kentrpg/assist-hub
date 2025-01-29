import type { NextApiRequest, NextApiResponse } from "next";
import signIn from "@/utils/api/auth/signin";
import { isValid } from "@/helpers/api/status";
import { setAuthCookie } from "@/helpers/cookies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await signIn(req.body);
  
  const { data, ...rest } = result;
  const { jwtToken, ...userData } = data || {};

  if (isValid(rest) && jwtToken) {
    const identity = data?.IsAdmin ? "admin" : "user";
    const cookieHeaders = setAuthCookie(identity, jwtToken);
    res.setHeader("Set-Cookie", cookieHeaders);
  }

  return res.json({
    ...rest,
    data: userData,
  });
}
