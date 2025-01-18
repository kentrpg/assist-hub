import { Error } from "@/types/apiRoutes";

export const Response = {
  statusCode: 200,
  status: true,
  message: "添加訂單成功",
};

export type ResponseMock<T = unknown> = {
  statusCode: number;
  status: boolean;
  message: string;
  data?: T;
};

export type Result<T = unknown> = {
  statusCode: number;
  status: boolean;
  message: string;
  data?: T;
  error?: Error | null;
};

export const ResultCheckout = {
  "product": {
    "id": 20,
    "name": "鋁製躺式輪椅",
    "imgSrc": "圖片路徑",
    "imgAlt": "",
    "quantity": 2,
    "rentStamp": "2011-10-10T14:48:00",
    "returnStamp": "2011-10-10T14:48:00",
    "period": 2,
    "rent": 3000,
    "deposit": 500,
    "fee": 0,
    "finalAmount": 3500
  },
  "payment": "LinePay",
  "shipping": {
    "method": "store",
    "data": {
      "userName": "frank",
      "phone": "0912345678",
      "email": "test123@hexschool.com",
      "addressZIP": "800",
      "addressCity": "高雄市",
      "addressDistinct": "新興區",
      "addressDetail": "民生一路123號"
    }
  }
};

export type ResultCheckoutType = typeof ResultCheckout;
