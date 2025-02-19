import { Error } from "@/types/apiRoutes";
import { Color } from "@/types/uiProps";

type BaseProduct = {
  id: number;
  name: string;
  description: string;
  rent: number;
  imgSrc: string;
  imgAlt: string;
  features: string[];
};

export const ResultGetInquiry = {
  statusCode: 0,
  status: true,
  message: "",
  data: {
    "inquiryId": 1,
    "inquiryCode": "AKC833",
    "createdStamp": "2011-10-10T14:48:00",
    "level": "1",
    "additionalInfo": "",
    "products": [
      {
        "id": 1,
        "name": "",
        "description": "",
        "rent": 3000,
        "imgSrc": "",
        "imgAlt": "",
        "features": [
          "支撐性高",
          "輕量化設計",
          "S曲面型坐墊"
        ]
      }
    ] as BaseProduct[]  // 使用型別註記而不是 as const
  }
};

export type ResultGetInquiryType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: typeof ResultGetInquiry["data"] | undefined;
  error: Error | null;
};

export type InquiryPageProps = {
  data: NonNullable<ResultGetInquiryType["data"]>;
};

export type InquiryProduct = BaseProduct & Color;
