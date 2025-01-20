import type { NextApiRequest, NextApiResponse } from "next";
import postAdminSuggestProduct from "@/utils/api/admin/postSuggestProduct";
import { ResultPostAdminSuggestProductType } from "@/types/postAdminSuggestProduct";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResultPostAdminSuggestProductType>,
) {
  const result = await postAdminSuggestProduct(
    req.cookies.token || "",
    req.body,
  );

  return res.json(result);
}
