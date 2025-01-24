import type { NextApiRequest, NextApiResponse } from "next";
import signIn from "@/utils/api/auth/signin";
import { setAuthCookie } from "@/helpers/cookies";
import { isValid } from "@/helpers/api/status";
import { NODE_ENV } from "@/constants/environment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await signIn(req.body);
  
  const { data, ...rest } = result;
  const { jwtToken, ...userData } = data || {};

  console.log("NODE_ENV:", NODE_ENV);
  console.log("process.env.NEXT_PUBLIC_NODE_ENV;", process.env.NEXT_PUBLIC_NODE_ENV);
  console.log("jwtToken:", jwtToken);

  if (isValid(rest) && jwtToken) {
    console.log("設置 cookie 前的驗證：", { jwtToken }); 
    
    // 設置 cookie
    const cookieHeader = setAuthCookie(jwtToken);
    res.setHeader("Set-Cookie", cookieHeader);
    
    // 驗證 cookie 是否正確設置
    const setCookieHeader = res.getHeader("Set-Cookie");
    console.log("Cookie 設置狀態：", {
      cookieHeader,
      headerAfterSet: setCookieHeader,
      isHeaderSet: !!setCookieHeader,
    });

    // 解析設置的 cookie 內容
    if (typeof setCookieHeader === 'string' || Array.isArray(setCookieHeader)) {
      const cookieString = Array.isArray(setCookieHeader) 
        ? setCookieHeader[0] 
        : setCookieHeader;
      
      console.log("已設置的 Cookie 內容：", {
        cookieString,
        containsToken: cookieString.includes('token='),
        cookieLength: cookieString.length
      });
    }
  }

  return res.json({
    ...rest,
    data: userData,
  });
}
