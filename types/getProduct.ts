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
      level: 1,
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
        listAlt: [
          "https://image.com",
          "https://image.com",
          "https://image.com",
          "https://image.com",
        ],
      },
      manual: "<ol><li>展開輪椅：將輪椅從摺疊狀態打開，確保座椅完全展開且側邊卡榫扣緊。</li><li>煞車使用：在固定位置時，請使用煞車控制柄將後輪鎖住，確保輪椅穩定。</li><li>使用安全帶：如需額外固定，可繫上附贈的安全帶，提供更多保護。</li><li>摺疊收納：輕輕拉起座椅中央的收納帶，輪椅即可快速摺疊，方便攜帶和存放。</li><li>清潔保養：請使用濕布擦拭框架與坐墊，不建議直接用水沖洗；定期檢查輪胎與剎車功能，保持最佳狀態。</li></ol>",
    },
    comparison: [
      {
        imgSrc: "https://image.com",
        name: "手動輪椅",
        rent: 3000,
        material: "不鏽鋼",
        features: [
          "可折疊",
          "輕量設計"
        ]
      }
    ],
    recommended: [
      {
        imgSrc: "https://image.com",
        name: "手動輪椅",
        rent: 1000,
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
