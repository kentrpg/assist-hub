import type { NextApiRequest, NextApiResponse } from 'next';
import { signOut } from '@/utils/api/auth/signout';
import { ResultSignoutType } from '@/types/signout';
import { isUnauthorized, isValid } from '@/helpers/api/status';
import { clearAuthCookie } from '@/helpers/cookies';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultSignoutType>
) {
  const result = await signOut(req.cookies.token || "");
  
  const shouldClearAuthCookie = isValid(result) && !isUnauthorized(result);

  if (shouldClearAuthCookie) {
    const cookieHeaders = clearAuthCookie();
    res.setHeader("Set-Cookie", cookieHeaders);
  }
  
  return res.json(result);
}