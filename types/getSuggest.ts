import { Error } from "@/types/apiRoutes";

export const ResultGetSuggest = {
  statusCode: 0,
  status: true,
  message: "",
  "data": {
    "suggestId": 29,
    "suggestCode": "AA063S",
    "createdDate": "2025-01-20T05:16:44.55",
    "createdStamp": "2025-01-20",
    "additionalInfo": "stirng",
    "level": "1",
    "products": [
      {
        "id": 12,
        "name": "【樂輕行】輕便折疊輪椅",
        "description": "輕巧設計適合日常出行或短途旅行，具防滑腳踏板與可折疊功能，方便收納與攜帶，承重量可達100公斤，是老年人與行動不便人士的理想選擇。\r\n",
        "rent": 500.00,
        "imgSrc": "http://52.172.145.130:8080/picture/wheelChair/wheelChair-1.jpg",
        "imgAlt": "【樂輕行】輕便折疊輪椅",
        "features": [
            "體積小好攜帶",
            "輪徑大"
        ],
        "reasons": "string",
    },
    {
        "id": 13,
        "name": "【倍舒適】加寬輪椅",
        "description": "特殊加寬座椅設計，提供極高舒適性，配備大輪徑與防滑腳踏板，適合體型較大的使用者，輕鬆拆卸方便清潔。",
        "rent": 550.00,
        "imgSrc": "http://52.172.145.130:8080/picture/wheelChair/wheelChair-2.jpg",
        "imgAlt": "【倍舒適】加寬輪椅",
        "features": [],
        "reasons": ""
      },
    ],
  },
};

export type ResultGetSuggestType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: typeof ResultGetSuggest["data"] | undefined;
  error: Error | null;
};

export type SuggestPageProps = typeof ResultGetSuggest["data"];
