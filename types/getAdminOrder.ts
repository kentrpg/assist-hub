import { Error } from "@/types/apiRoutes";

export const ResultGetAdminOrder = {
  statusCode: 0,
  status: true,
  message: "",
  data: {
    "orderStatus": "未付款",
    "shippingStatus": "待出貨",
    "orderCode": "202501180002",
    "createdDate": "2025-01-18T14:42:12.77",
    "createdStamp": "2025-01-18",
    "note": "",
    "shipping": "宅配",
    "shippinginfo": {
        "name": "鄭柏易",
        "phone": "0958134697",
        "email": "123@gmail.com",
        "address": "高雄市12345號",
        "addressZIP": "812",
        "addressCity": "高雄市",
        "addressDistrict": null,
        "AddressDetail": "12345號"
    },
    "details": {
        "quantity": 1,
        "productName": "【樂輕行】輕便折疊輪椅",
        "productDes": "輕巧設計適合日常出行或短途旅行，具防滑腳踏板與可折疊功能，方便收納與攜帶，承重量可達100公斤，是老年人與行動不便人士的理想選擇。\r\n",
        "productImgSrc": "http://52.172.145.130:8080/picture/wheelChair/wheelChair-1.webp",
        "productImgAlt": "【樂輕行】輕便折疊輪椅",
        "rent": 5000.00,
        "deposit": 500.00,
        "fee": 200.00,
        "finalAmount": 5700.00,
        "period": 30,
        "rentDate": "2025-01-16T15:26:09.753",
        "rentStamp": "2025-01-16",
        "returnDate": "2025-01-16T15:26:09.753",
        "returnStamp": "2025-01-16",
        "payment": "LinePay"
    },
    "member": {
        "memberId": 57,
        "name": "鄭柏易帥哥",
        "email": "123@yahoo.com",
        "lineId": "",
      phone: "0958134697",
    },
  },
};

export type ResultGetAdminOrderType = typeof ResultGetAdminOrder;

export type OrderDataType = ResultGetAdminOrderType["data"];

export type Result = {
  statusCode: number;
  status: boolean;
  message: string;
  data: OrderDataType | undefined;
  error: Error | null;
};
