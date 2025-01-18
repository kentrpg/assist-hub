import { Error } from "@/types/apiRoutes";

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
      rent: 500.00,
      imgSrc: "http://52.172.145.130:8080/picture/test/wheelChair/wheelChair-1-Copy.jpg",
      imgAlt: "手動輪椅01",
    },
    {
      id: 13,
      type: "wheelChair",
      name: "手動輪椅02",
      level: "2",
      rent: 550.00,
      imgSrc: "",
      imgAlt: "手動輪椅02",
    },
    {
      id: 14,
      type: "wheelChair",
      name: "手動輪椅03",
      level: "1",
      rent: 650.00,
      imgSrc: "",
      imgAlt: "手動輪椅03",
    },
  ],
};

export type ResultGetProductsTypeGuard = typeof ResultGetProducts;

export type ResultGetProductsType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: typeof ResultGetProducts.data | undefined;
  error: Error | null;
};
