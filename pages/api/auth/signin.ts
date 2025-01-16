import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/checkout";
import signIn from "@/utils/api/auth/signin";
import { setAuthCookie } from "@/utils/cookies";
import { ResultSigninType } from "@/types/signin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result<ResultSigninType["data"]>>
) {
  console.log("req.body", req.body);
  const result = await signIn(req.body);
  console.log("result", result);

  if (result.statusCode === 200 && result.data?.jwtToken) {
    res.setHeader("Set-Cookie", setAuthCookie(result.data.jwtToken));
  }

  return res.json(result);
}
