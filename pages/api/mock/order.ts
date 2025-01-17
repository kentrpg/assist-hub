import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseMock } from "@/types/postOrder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseMock>
) {
  if (req.method === "POST") {
    return res.json({
      statusCode: 200,
      status: true,
      message: "添加訂單成功",
    });
  }

  if (req.method === "GET") {
    return res.json({
      statusCode: 200,
      status: true,
      message: "成功取得會員訂單",
      data: [
        {
          "orderId":11,
          "orderStatus": "已結案",
          "shippingStatus": "已歸還",
          "orderCode": "135723",
          "createdStamp": "2011-10-10T14:48:00",
          "shipping": "delivery",
          "details": {
            "quantity": 2,
            "productName": "",
            "productDes": "",
            "productImgSrc": "",
            "productImgAlt": "",
            "rent": 1000,
            "deposit": 500,
            "fee": 200,
            "feeDeposit": 700,
            "finalAmount": 1700,
            "rentStamp": "2011-10-10",
            "returnStamp": "2011-10-10"
          }
        },
        {
          "orderId":21,
          "orderStatus": "已付款",
          "shippingStatus": "待出貨",
          "orderCode": "135723",
          "createdStamp": "2011-10-10",
          "shipping": "delivery",
          "details": {
            "productName": "",
            "productDes": "",
            "productImgSrc": "",
            "productImgAlt": "",
            "rent": 1000,
            "deposit": 500,
            "fee": 200,
            "feeDeposit": 700,
            "finalAmount": 1700,
            "rentStamp": "2011-10-10",
            "returnStamp": "2011-10-10"
          }
        }
      ]
    });
  }

  return res.status(405).json({
    statusCode: 405,
    status: false,
    message: "Method not allowed",
  });
}
