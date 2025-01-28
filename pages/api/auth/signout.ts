import type { NextApiRequest, NextApiResponse } from 'next';
import { signOut } from '@/utils/api/auth/signout';
import { ResultSignoutType } from '@/types/signout';
import { isUnauthorized, isValid } from '@/helpers/api/status';
import { setAuthCookie } from '@/helpers/cookies';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultSignoutType>
) {
  const result = await signOut(req.cookies.token || "");
  
  const shouldClearAuthCookie = isValid(result) && !isUnauthorized(result);

  if (shouldClearAuthCookie) {
    const cookieHeader = setAuthCookie("");
    res.setHeader("Set-Cookie", cookieHeader);
  }
  
  return res.json(result);
}