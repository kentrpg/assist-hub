import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/getAdminInquiries";
import getAdminInquiries from "@/utils/api/admin/getInquiries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>,
) {
  const result = await getAdminInquiries(req.cookies.token || "");

  return res.json(result);
}
