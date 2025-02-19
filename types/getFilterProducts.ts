import { Error } from "@/types/apiRoutes";

export type RequestGetFilterProductsQueryType = {
  transactionId?: string;
};

export const ResultGetFilterProducts = {
  statusCode: 0,
  status: true,
  message: "",
  data: [
    {
      "id": 12,
      "type": "wheelChair",
      "name": "【樂輕行】輕便折疊輪椅",
      "level": "1",
      "rent": 500.0,
      "deposit": 0.0,
      "fee": 200.0,
      "description": "輕巧設計適合日常出行或短途旅行，具防滑腳踏板與可折疊功能，方便收納與攜帶，承重量可達100公斤，是老年人與行動不便人士的理想選擇。\r\n",
      "info": [
        {
            "infokey": "material",
            "infovalue": "鋁合金"
        },
        {
            "infokey": "origin",
            "infovalue": "台灣"
        },
        {
            "infokey": "load",
            "infovalue": "90"
        }
      ],
      "features": [
        "體積小好攜帶",
        "輪徑大"
      ],
      "image": {
        "preview": "/picture/wheelChair/wheelChair-1.webp",
        "previewAlt": "【樂輕行】輕便折疊輪椅",
        "list": [
            "/picture/wheelChair/wheelChair-2.webp",
            "/picture/wheelChair/wheelChair-2.webp",
            "/picture/wheelChair/wheelChair-2.webp",
            "/picture/wheelChair/wheelChair-2.webp",
            "/picture/wheelChair/wheelChair-2.webp"
        ]
      }
    },
  ],
};

export type ResultGetFilterProductsType = Omit<
  typeof ResultGetFilterProducts,
  "error" | "data"
> & {
  error: Error | null;
  data: typeof ResultGetFilterProducts["data"] | undefined;
};

export type FilterProductType = typeof ResultGetFilterProducts["data"][number];

export type RequestGetFilterProductsType = {
  type: string;
  lv: string;
};
