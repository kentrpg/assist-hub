import { Error } from "@/types/apiRoutes";

export const ResultGetAdminOrders = {
  statusCode: 0,
  status: true,
  message: "",
  data: [
    {
      "orderId": 8,
      "memberName": "王小姐",
      "orderStatus": "已結案",
      "shippingStatus": "已歸還",
      "orderCode": "202501140001",
      "createdDate": "2025-01-14T00:19:31.6",
      "createdStamp": "2025-01-14",
      "shipping": "delivery",
      "quantity": 2,
      "finalAmount": 3500.00,
      "rentDate": "2011-10-10T14:48:00",
      "rentStamp": "2011-10-10",
      "returnDate": "2011-12-10T14:48:00",
      "returnStamp": "2011-12-10"
    },
  ],
};

export type ResultGetAdminOrdersType = typeof ResultGetAdminOrders;

export type OrderDataType = ResultGetAdminOrdersType["data"][number];

export type Result = {
  statusCode: number;
  status: boolean;
  message: string;
  data: OrderDataType[] | undefined;
  error: Error | null;
};