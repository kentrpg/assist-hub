import { isValid } from "@/helpers/api/status";
import { setAuthCookie } from "@/helpers/cookies";
import { ResultGetLineCallback } from "@/types/getLinecallback";
import getLineCallback from "@/utils/api/getLineCallback";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultGetLineCallback>,
) {
  console.log("getLinecallback api routes start");

  const queryString = req.url?.split("?")[1] || "";
  console.log("queryString from URL:", queryString);

  const result = await getLineCallback(queryString);

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
