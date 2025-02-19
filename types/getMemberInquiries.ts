import { Error } from "@/types/apiRoutes";

export const ResultGetInquiries = {
  statusCode: 0,
  status: true,
  message: "",
  data: [
    {
      "inquiryId": 15,
      "inquiryCode": "AA016",
      "createdDate": "2025-01-20T01:05:18.017",
      "createdStamp": "2025-01-20",
      "isReplied": false,
      "images": [
        {
          "src": "http://52.172.145.130:8080/picture/wheelChair/wheelChair-1.jpg",
          "alt": "【樂輕行】輕便折疊輪椅"
        },
        {
          "src": "http://52.172.145.130:8080/picture/wheelChair/wheelChair-2.jpg",
          "alt": "【倍舒適】加寬輪椅"
        },
        {
          "src": "http://52.172.145.130:8080/picture/wheelChair/wheelChair-3.jpg",
          "alt": "【省心】經濟型輪椅"
        }
      ],
      "suggestId": 14,
      "suggestCode": "AA016S"
    },
  ],
};

export type InquiriesDataType = typeof ResultGetInquiries["data"][number];

export type ResultGetInquiriesType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: InquiriesDataType[] | undefined;
  error: Error | null;
};