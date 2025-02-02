import type { NextApiRequest, NextApiResponse } from "next";
import putOrderStatus from "@/utils/api/admin/putOrderStatus";
import { Result } from "@/types/putAdminOrderStatus";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>,
) {
  const result = await putOrderStatus(req.cookies.token || "", req.body);

  return res.json(result);
}
