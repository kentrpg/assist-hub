import { Error } from "@/types/apiRoutes";

export const ResultGetSuggest = {
  statusCode: 0,
  status: true,
  message: "",
  "data": {
    "suggestId": 29,
    "suggestCode": "AA073S",
    "level": "1",
    "additionalInfo": "test20",
    "createdDate": "2025-01-20T18:13:50.353",
    "createdStamp": "2025-01-20",
    "products": [
      {
        "suggestProductId": 15,
        "productId": 104,
        "name": "【樂護】標準病床",
        "description": "標準病床具有靜音運作, 記憶床墊, 簡易操作, 升降功能等特點，採用高強度鋼製成，承重可達200公斤。適合長期照護或短期復健需求，升降功能與多角度調整提供使用者舒適體驗，並確保看護者操作便利。",
        "rent": 50000.00,
        "imgSrc": "https://assist-hub.rocket-coding.com/picture/bed/bed-7.webp",
        "imgAlt": "【樂護】標準病床",
        "features": [
            "靜音運作",
            "記憶床墊",
            "簡易操作",
            "升降功能"
        ],
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
