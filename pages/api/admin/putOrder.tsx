import type { NextApiRequest, NextApiResponse } from "next";
import putOrder from "@/utils/api/admin/putOrder";
import { Result } from "@/types/putAdminOrder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>,
) {
  const result = await putOrder(
    req.cookies.token || "",
    req.body,
    req.query.id as string,
  );

  return res.json(result);
}
