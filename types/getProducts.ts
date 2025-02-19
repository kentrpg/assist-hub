import { Error } from "@/types/apiRoutes";
import { features } from "process";

export const ResultGetProducts = {
  statusCode: 200,
  status: true,
  message: "查詢全部商品成功",
  data: [
    {
      id: 12,
      type: "wheelChair",
      name: "手動輪椅01",
      level: "1",
      rent: 500.0,
      imgSrc:
        "http://52.172.145.130:8080/picture/test/wheelChair/wheelChair-1-Copy.jpg",
      imgAlt: "手動輪椅01",
      features: ["可折疊", "可調整坐墊高度", "可調整扶手高度"],
      description: "手動輪椅01",
    },
  ],
};

export type ResultGetProductsTypeGuard = typeof ResultGetProducts;

// error handle response data 會帶 undefined
export type ResultGetProductsType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: typeof ResultGetProducts.data | undefined;
  error: Error | null;
};
