import type { NextApiRequest, NextApiResponse } from "next";
import putAdminSuggest from "@/utils/api/admin/putAdminSuggest";
import { ResultPutAdminSuggestType } from "@/types/putAdminSuggest";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultPutAdminSuggestType>,
) {
  const result = await putAdminSuggest(req.cookies.token || "", req.body);

  return res.json(result);
}
