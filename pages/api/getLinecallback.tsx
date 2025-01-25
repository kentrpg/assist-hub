import { isValid } from "@/helpers/api/status";
import { setAuthCookie } from "@/helpers/cookies";
import { ResultGetLineCallback } from "@/types/getLinecallback";
import getLineCallback from "@/utils/api/getLinecallback";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultGetLineCallback>,
) {
  const { inquiryId } = req.query;
  const result = await getLineCallback(inquiryId as string);

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
