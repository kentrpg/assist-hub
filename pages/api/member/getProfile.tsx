import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import getProfile from "@/utils/api/member/getProfile";

// TBD: getProfile API Route 沒有使用到，是否需要刪除?
// 只有在 user/profile.tsx getServerSideProps 使用到

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const result = await getProfile(req.cookies.token || "");
  return res.json(result);
}
