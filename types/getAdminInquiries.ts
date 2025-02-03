import { Error } from "@/types/apiRoutes";

export const ResultGetAdminInquiries = {
  statusCode: 200,
  status: true,
  message: "取得全部詢問單/建議單(店家後台)成功",
  data: [
    {
      "inquiryId": 1,
      "inquiryCode": "AA002",
      "isReplied": true,
      "createdDate": "2025-01-16T03:12:20.093",
      "createdStamp": "2025-01-16",
      "suggestId": 1,
      "suggestCode": "AA002S",
      "member": {
        "memberName": "王小姐",
        "email": "googlexxx@gmail.com",
        "lineId": "",
      },
    },
  ],
};

export type InquiriesDataType = typeof ResultGetAdminInquiries["data"][number];

export type Result = {
  statusCode: number;
  status: boolean;
  message: string;
  data: InquiriesDataType[] | undefined;
  error: Error | null;
};
