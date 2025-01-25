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

  console.log("signin api routes", result);

  if (isValid(rest) && jwtToken) {
    const cookieHeader = setAuthCookie(jwtToken);
    res.setHeader("Set-Cookie", cookieHeader);
  }

  return res.json({
    ...rest,
    data: userData,
  });
}
