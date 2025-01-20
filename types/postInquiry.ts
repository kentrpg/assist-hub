import { Error } from "@/types/apiRoutes";

export const ResultPostInquiry = {
  statusCode: 0,
  status: true,
  message: "",
  data: [
    {
      "id": 12,
      "name": "【樂輕行】輕便折疊輪椅",
      "description": "輕巧設計適合日常出行或短途旅行，具防滑腳踏板與可折疊功能，方便收納與攜帶，承重量可達100公斤，是老年人與行動不便人士的理想選擇。\r\n",
      "rent": 500.00,
      "imgSrc": "http://52.172.145.130:8080/picture/wheelChair/wheelChair-1.jpg",
      "imgAlt": "【樂輕行】輕便折疊輪椅",
      "features": ["體積小好攜帶","輪徑大"],
    },
  ],
};

export type ResultPostInquiryType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: typeof ResultPostInquiry.data | undefined;
  error: Error | null;
};

export type InquiryPageProps = typeof ResultPostInquiry["data"];

export type RequestPostInquiryType = {
  productIds: number[];
};
