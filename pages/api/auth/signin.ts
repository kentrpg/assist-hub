import type { NextApiRequest, NextApiResponse } from "next";
import signIn from "@/utils/api/auth/signin";
import { setAuthCookie } from "@/utils/cookies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await signIn(req.body);
  
  const { data, ...rest } = result;
  const { jwtToken, ...userData } = data || {};

  if (result.statusCode === 200 && result.data?.jwtToken) {
    res.setHeader("Set-Cookie", setAuthCookie(result.data.jwtToken));
  }

  return res.json({
    ...rest,
    data: userData,
  });
}
