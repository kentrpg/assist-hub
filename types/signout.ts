import { Error } from "@/types/apiRoutes";

export const ResultSignout = {
  "statusCode": 200,
  "status": true,
  "message": "用戶已登出",
  "data": {
      "jwtToken": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjAsIkV4cCI6IjIvMTUvMjAyMSAxMDozNTowOCBQTSJ9.VmmVvR5a4DCQq09VxkQoTw0NWxqPCJzoB4aja2w79JQ5ZZE-lMSTWxwqNUaokfOeycWETO2yeW04ZbLJoIVfKA"
  }
};

export const ResultSignoutError = {
  "Status": false,
  "Message": "請重新登入"
};

export type ResultSignoutType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: typeof ResultSignout.data | undefined;
  error: Error | null;
};
