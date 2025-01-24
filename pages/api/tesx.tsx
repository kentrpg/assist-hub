import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/postOrder";

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

  // 從 query 中解析參數
  const { transactionId, finalAmount } = req.query;

  // 印出參數值
  console.log("收到的參數：", { transactionId, finalAmount });

  // 返回結果
  return res.status(200).json({
    statusCode: 200,
    status: true,
    message: "成功接收參數",
    data: {
      id: transactionId as string,
      amount: finalAmount as string,
    },
  });
}
