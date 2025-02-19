import { Error } from "@/types/apiRoutes";

export const ResultGetProduct = {
  statusCode: 200,
  status: true,
  message: "查詢全部商品成功",
  data: {
    product: {
      id: 1,
      type: "wheelchair",
      name: "鋁製躺式輪椅",
      level: "1",
      rent: 5000,
      deposit: 500,
      fee: 150,
      description:
        "外出旅遊輕便輪椅首選車款。輕量設計，女性也能輕易搬運。S曲面型座墊，防滑穩姿一次到位，坐的人舒適，推的人輕鬆。",
      info: {
        material: "不鏽鋼",
        load: "最高支撐 120 公斤",
        origin: "台灣製造，品質保證",
      },
      features: ["輕量鋁合金", "收和體積小", "Ｓ型曲面坐墊"],
      image: {
        preview: "https://image.com",
        previewAlt: "",
        list: [
          "https://image.com",
          "https://image.com",
          "https://image.com",
          "https://image.com",
        ],
        listAlt: [
          "https://image.com",
          "https://image.com",
          "https://image.com",
          "https://image.com",
        ],
      },
      manual:
        "1. 使用控制面板或遙控器進行角度調整。2. 調整床體高度或護欄位置，確保安全與舒適。3. 定期檢查護欄及控制功能，保持運作正常。4. 清潔床體與護欄，延長使用壽命。",
    },
    comparison: [
      {
        productId: 1,
        imgSrc: "https://image.com",
        name: "手動輪椅",
        rent: 3000,
        material: "不鏽鋼",
        features: ["可折疊", "輕量設計"],
      },
    ],
    recommended: [
      {
        productId: 1,
        imgSrc: "https://image.com",
        imgAlt: "",
        name: "手動輪椅",
        rent: 1000,
        features: ["可折疊", "輕量設計"],
        description: "適合短期使用，價格親民。",
      },
    ],
  },
};

export type ResultGetProductTypeGuard = typeof ResultGetProduct;

export type ResultGetProductType = {
  statusCode: number;
  status: boolean;
  message: string;
  data: typeof ResultGetProduct.data | undefined;
  error: Error | null;
};
