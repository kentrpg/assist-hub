import { Error } from "@/types/apiRoutes";
import { ResultGetSuggest } from "./getSuggest";

export const ResultGetProduct = {
  statusCode: 200,
  status: true,
  message: "查詢全部商品成功",
  data: [
    {
      id: 1,
      type: "wheelchair",
      name: "鋁製躺式輪椅",
      level: "1",
      rent: 5000,
      deposit: 500,
      fee: 150,
      description:
        "外出旅遊輕便輪椅首選車款。輕量設計，女性也能輕易搬運。S曲面型座墊，防滑穩姿一次到位，坐的人舒適，推的人輕鬆。",
      "info": [
          {
              "infokey": "material",
              "infovalue": "鋁合金"
          }
      ],
      features: [
        "輕量鋁合金",
        "收和體積小",
        "Ｓ型曲面坐墊",
      ],
      image: {
        preview: "https://image.com",
        previewAlt: "",
        list: [
          "https://image.com",
          "https://image.com",
          "https://image.com",
          "https://image.com"
        ],
      },
    },
  ],
};

export type ResultGetProductTypeGuard = typeof ResultGetProduct;

export type ProductPageProps = typeof ResultGetProduct["data"];

export type ResultGetProductType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: typeof ResultGetProduct.data | undefined;
  error: Error | null;
};
