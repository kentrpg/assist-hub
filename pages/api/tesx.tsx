import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";
import postLinepayConfirm from "@/utils/api/line/postLinepayConfirm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>,
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      statusCode: 405,
      status: false,
      message: "只允許 GET 請求",
      error: {
        code: 405,
        message: "只允許 GET 請求",
      },
    });
  }

  const { transactionId, finalAmount } = req.query;

  if (!transactionId || !finalAmount) {
    return res.status(500).json({
      statusCode: 500,
      status: false,
      message: "缺少必要參數",
      error: {
        code: 500,
        message: "缺少 transactionId 或 finalAmount",
      },
    });
  }

  const result = await postLinepayConfirm({
    transactionId: transactionId as string,
    finalAmount: finalAmount as string,
  });

  return res.json(result);
}
