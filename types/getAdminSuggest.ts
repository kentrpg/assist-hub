import { Error } from "@/types/apiRoutes";

export const ResultGetAdminSuggest = {
  statusCode: 0,
  status: true,
  message: "",
  data: {
    "suggestId": 30,
    "suggestCode": "AA064S",
    "level": "2",
    "additionalInfo": "test",
    "products": [
      {
        "suggestProductId": 14,
        "productId": 15,
        "name": "【豪尊】豪華型輪椅",
        "description": "豪華設計搭配高靠背與可快拆功能，適合長時間使用，提供卓越的穩定性與舒適度，是高端需求者的最佳選擇。",
        "rent": 1000.00,
        "imgSrc": "http://52.172.145.130:8080/picture/wheelChair/wheelChair-4.jpg",
        "imgAlt": "【豪尊】豪華型輪椅",
        "features": [],
        "reasons": "API putSuggestProduct"
      },
    ],
  },
};

export type ResultGetAdminSuggestType = Omit<
  typeof ResultGetAdminSuggest,
  "error" | "data"
> & {
  error: Error | null;
  data: typeof ResultGetAdminSuggest["data"] | undefined;
};

export type SuggestProductType = typeof ResultGetAdminSuggest["data"];

export type RequestGetAdminSuggestType = {
  suggestId: string;
};
