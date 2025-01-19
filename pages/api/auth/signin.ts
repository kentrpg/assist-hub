import type { NextApiRequest, NextApiResponse } from "next";
import signIn from "@/utils/api/auth/signin";
import { setAuthCookie } from "@/helpers/cookies";
import { isValid } from "@/helpers/api/status";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await signIn(req.body);
  
  const { data, ...rest } = result;
  const { jwtToken, ...userData } = data || {};

  if (isValid(rest) && jwtToken) {
    res.setHeader("Set-Cookie", setAuthCookie(jwtToken));
  }

  return res.json({
    ...rest,
    data: userData,
  });
}
