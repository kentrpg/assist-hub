import type { NextApiRequest, NextApiResponse } from "next";
import { ResponseMock } from "@/types/postOrder";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseMock>
) {
  if (req.method === "GET") {
    return res.json({
      statusCode: 200,
      status: true,
      message: "取得特定詢問單（帶單號）成功",
      data: {
        "inquiryId": 61,
        "inquiryCode": "AA062",
        "createdDate": "2025-01-20T04:43:44.053",
        "createdStamp": "2025-01-20",
        "level": "2",
        "additionalInfo": "phc測試note02",
        "products": [
          {
            "id": 1,
            "name": "電動輪椅",
            "description": "輕量化鋁合金金屬設計",
            "rent": 2000,
            "imgSrc": "wheelChair.webp",
            "imgAlt": "電動輪椅",
            "features": ["支撐性高", "輕量化設計", "S曲面型坐墊"],
          },
          {
            "id": 2,
            "name": "腋下拐",
            "description": "輕量化鋁合金金屬設計",
            "rent": 1000,
            "imgSrc": "crutch.webp",
            "imgAlt": "腋下拐",
            "features": ["支撐性高", "輕量化設計", "可調節適合高度"],
          },
          {
            "id": 3,
            "name": "電動輪椅",
            "description": "輕量化鋁合金金屬設計",
            "rent": 2000,
            "imgSrc": "wheelChair.webp",
            "imgAlt": "電動輪椅",
            "features": ["支撐性高", "輕量化設計"],
          },
          {
            "id": 4,
            "name": "電動輪椅",
            "description": "輕量化鋁合金金屬設計",
            "rent": 2000,
            "imgSrc": "wheelChair.webp",
            "imgAlt": "電動輪椅",
            "features": ["支撐性高", "輕量化設計", "S曲面型坐墊"],
          },
          {
            "id": 5,
            "name": "電動輪椅",
            "description": "輕量化鋁合金金屬設計輕量化鋁合金金屬設計輕量化鋁合金金屬設計",
            "rent": 2000,
            "imgSrc": "wheelChair.webp",
            "imgAlt": "電動輪椅",
            "features": ["支撐性高", "輕量化設計", "S曲面型坐墊"],
          }
        ]
      }
    });
  }
}
