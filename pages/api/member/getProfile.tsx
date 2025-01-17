import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import getProfile from "@/utils/api/member/getProfile";

// TBD: getProfile API Route 沒有使用到，是否需要刪除?
// 只有在 user/profile.tsx getServerSideProps 使用到

// TBD: 確認 token 在 api route 取得傳入 API function 是否正確
// 把瀏覽器操作只限制在 api route 上，API function 純做 response 的處理並 return

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const result = await getProfile(req.cookies.token || "");
  return res.json(result);
}
