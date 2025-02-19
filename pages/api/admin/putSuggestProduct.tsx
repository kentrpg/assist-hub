import type { NextApiRequest, NextApiResponse } from "next";
import putAdminSuggestProduct from "@/utils/api/admin/putSuggestProduct";
import { ResultPutAdminSuggestProductType } from "@/types/putAdminSuggestProduct";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultPutAdminSuggestProductType>,
) {
  const result = await putAdminSuggestProduct(req.cookies.token || "", req.body);

  return res.json(result);
}
