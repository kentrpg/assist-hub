import { Error } from "@/types/apiRoutes";

export const ResultGetMemberOrder = {
  statusCode: 0,
  status: true,
  message: "",
  data: {
      "orderStatus": "已結案",
      "shippingStatus": "已歸還",
      "orderCode": "135723",
      "createdDate": "2025-01-16T18:04:08.687",
      "createdStamp": "2025-01-16",
      "note": "訂單備註",
      "shipping": "delivery|store",
      "shippinginfo": {
        "name": "訂購人姓名",
        "phone": "訂購人電話",
        "email": "訂購人信箱",
        "address": "訂購人地址"
      },
      "details": {
        "quantity": 2,
        "productName": "鋁製躺式輪椅",
        "productDes": "外出旅遊輕便輪椅首選車款。",
        "productImgSrc": "images/device1.png",
        "productImgAlt": "鋁製躺式輪椅",
        "rent": 1000,
        "deposit": 500,
        "fee": 200,
        "finalAmount": 1700,
        "period": 30,
        "rentDate": "2025-01-16T15:26:09.753",
        "rentStamp": "2025-01-16",
        "returnDate": "2025-01-16T15:26:09.753",
        "returnStamp": "2025-01-16",
        "payment": "LinePay"
      }
    },
};

export type ResultGetMemberOrderType = Omit<typeof ResultGetMemberOrder, "error" | "data"> & {
  error: Error | null;
  data: typeof ResultGetMemberOrder["data"] | undefined;
};