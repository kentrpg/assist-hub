import { SuggestProductType } from "@/types/getAdminSuggest";
import { ProductPageProps } from "@/types/getProductFilter";
import { SuggestPageProps } from "@/types/getSuggest";

export type CategoryType = "wheelChair" | "crutch" | "bed" | "oxygen";

export type Products = SuggestPageProps["products"][number];

export type ProductFilter = ProductPageProps[number];

export type ProductFilterState = {
  [key in CategoryType]: ProductFilter[];
};

export const initialProductFilter: ProductFilterState = {
  wheelChair: [],
  crutch: [],
  bed: [],
  oxygen: [],
};

type CategoryItemType = {
  type: CategoryType;
  label: string;
  active: boolean;
};

export const categories: CategoryItemType[] = [
  { type: "wheelChair", label: "行動輪椅", active: true },
  { type: "crutch", label: "拐杖步行", active: false },
  { type: "bed", label: "臥室寢具", active: false },
  { type: "oxygen", label: "呼吸照護", active: false },
];

export const ResultGetSuggest = {
  statusCode: 200,
  status: true,
  message: "",
  data: {
    suggestId: 0,
    suggestCode: "",
    level: "",
    additionalInfo: "",
    products: [],
  },
};

export type SuggestType = {
  suggestInfo: SuggestProductType;
  filterProducts: ProductFilterState;
};

export const mockData = [
  {
    id: 12,
    name: "【樂輕行】輕便折疊輪椅",
    description:
      "輕巧設計適合日常出行或短途旅行，具防滑腳踏板與可折疊功能，方便收納與攜帶，承重量可達100公斤，是老年人與行動不便人士的理想選擇。\r\n",
    rent: 500.0,
    imgSrc: "http://52.172.145.130:8080/picture/wheelChair/wheelChair-1.webp",
    imgAlt: "【樂輕行】輕便折疊輪椅",
    features: ["體積小好攜帶", "輪徑大"],
    reasons: "",
  },
  {
    id: 13,
    name: "【倍舒適】加寬輪椅",
    description:
      "特殊加寬座椅設計，提供極高舒適性，配備大輪徑與防滑腳踏板，適合體型較大的使用者，輕鬆拆卸方便清潔。",
    rent: 550.0,
    imgSrc: "http://52.172.145.130:8080/picture/wheelChair/wheelChair-2.webp",
    imgAlt: "【倍舒適】加寬輪椅",
    features: [],
    reasons: "",
  },
];

export const mockProducts = [
  {
    id: 21,
    type: "bed",
    name: "【舒適】電動復健床",
    level: "5",
    rent: 2000.0,
    deposit: 0.0,
    fee: 200.0,
    description:
      "電動復健床具有價格實惠, 人體工學, 防水設計, 簡易操作, 安全護欄等特點，採用鋁合金製成，承重可達220公斤。適合長期照護或短期復健需求，升降功能與多角度調整提供使用者舒適體驗，並確保看護者操作便利。",
    info: [
      {
        infokey: "material",
        infovalue: "鋁合金",
      },
    ],
    features: ["多段可調"],
    image: {
      preview: "/picture/bed/bed-4.webp",
      previewAlt: "【舒適】電動復健床",
      list: [],
    },
  },
  {
    id: 98,
    type: "bed",
    name: "【舒眠】電動調整床",
    level: "3",
    rent: 44000.0,
    deposit: 22000.0,
    fee: 200.0,
    description:
      "【舒眠】電動調整床具有高承重, 簡易操作, 升降功能, 人體工學等特點，採用鋁合金製成，承重可達250公斤。適合長期照護或短期復健需求，升降功能與多角度調整提供使用者舒適體驗，並確保看護者操作便利。",
    info: [
      {
        infokey: "material",
        infovalue: "鋁合金",
      },
      {
        infokey: "origin",
        infovalue: "日本",
      },
      {
        infokey: "load",
        infovalue: "250",
      },
    ],
    features: ["承重高", "簡易操作", "升降功能", "人體工學"],
    image: {
      preview: "/picture/bed/bed-1.webp",
      previewAlt: "【舒眠】電動調整床",
      list: [],
    },
  },
  {
    id: 99,
    type: "bed",
    name: "【靜宜】升降護理床",
    level: "3",
    rent: 34000.0,
    deposit: 17000.0,
    fee: 200.0,
    description:
      "升降護理床具有價格實惠, 人體工學, 安全護欄, 多角度調整等特點，採用鋁合金製成，承重可達290公斤。適合長期照護或短期復健需求，升降功能與多角度調整提供使用者舒適體驗，並確保看護者操作便利。",
    info: [
      {
        infokey: "material",
        infovalue: "鋁合金",
      },
      {
        infokey: "origin",
        infovalue: "日本",
      },
      {
        infokey: "load",
        infovalue: "290",
      },
    ],
    features: ["價格實惠", "人體工學", "安全護欄", "多角度調整"],
    image: {
      preview: "/picture/bed/bed-2.webp",
      previewAlt: "【靜宜】升降護理床",
      list: [],
    },
  },
  {
    id: 100,
    type: "bed",
    name: "【穩康】多功能病床",
    level: "4",
    rent: 23000.0,
    deposit: 11500.0,
    fee: 200.0,
    description:
      "多功能病床具有安全護欄, 靜音運作, 價格實惠, 記憶床墊, 人體工學等特點，採用ABS材質製成，承重可達290公斤。適合長期照護或短期復健需求，升降功能與多角度調整提供使用者舒適體驗，並確保看護者操作便利。",
    info: [
      {
        infokey: "material",
        infovalue: "ABS材質",
      },
      {
        infokey: "origin",
        infovalue: "日本",
      },
      {
        infokey: "load",
        infovalue: "290",
      },
    ],
    features: ["安全護欄", "靜音運作", "價格實惠", "記憶床墊", "人體工學"],
    image: {
      preview: "/picture/bed/bed-3.webp",
      previewAlt: "【穩康】多功能病床",
      list: [],
    },
  },
  {
    id: 101,
    type: "bed",
    name: "【安心】智能護理床",
    level: "4",
    rent: 26000.0,
    deposit: 13000.0,
    fee: 200.0,
    description:
      "智能護理床具有靜音運作, 簡易操作, 高承重, 價格實惠, 多角度調整等特點，採用ABS材質製成，承重可達280公斤。適合長期照護或短期復健需求，升降功能與多角度調整提供使用者舒適體驗，並確保看護者操作便利。",
    info: [
      {
        infokey: "material",
        infovalue: "ABS材質",
      },
      {
        infokey: "origin",
        infovalue: "台灣",
      },
      {
        infokey: "load",
        infovalue: "280",
      },
    ],
    features: ["靜音運作", "簡易操作", "承重高", "價格實惠", "多角度調整"],
    image: {
      preview: "/picture/bed/bed-4.webp",
      previewAlt: "【安心】智能護理床",
      list: [],
    },
  },
  {
    id: 102,
    type: "bed",
    name: "【舒適】電動復健床",
    level: "5",
    rent: 12000.0,
    deposit: 6000.0,
    fee: 200.0,
    description:
      "電動復健床具有價格實惠, 人體工學, 防水設計, 簡易操作, 安全護欄等特點，採用鋁合金製成，承重可達220公斤。適合長期照護或短期復健需求，升降功能與多角度調整提供使用者舒適體驗，並確保看護者操作便利。",
    info: [
      {
        infokey: "material",
        infovalue: "鋁合金",
      },
      {
        infokey: "origin",
        infovalue: "德國",
      },
      {
        infokey: "load",
        infovalue: "220",
      },
    ],
    features: ["價格實惠", "人體工學", "防水設計", "簡易操作", "安全護欄"],
    image: {
      preview: "/picture/bed/bed-5.webp",
      previewAlt: "【舒適】電動復健床",
      list: [],
    },
  },
  {
    id: 103,
    type: "bed",
    name: "【全護】高階護理床",
    level: "5",
    rent: 12000.0,
    deposit: 6000.0,
    fee: 200.0,
    description:
      "高階護理床具有簡易操作, 安全護欄, 靜音運作, 高承重等特點，採用鋁合金製成，承重可達290公斤。適合長期照護或短期復健需求，升降功能與多角度調整提供使用者舒適體驗，並確保看護者操作便利。",
    info: [
      {
        infokey: "material",
        infovalue: "鋁合金",
      },
      {
        infokey: "origin",
        infovalue: "美國",
      },
      {
        infokey: "load",
        infovalue: "290",
      },
    ],
    features: ["簡易操作", "安全護欄", "靜音運作", "承重高"],
    image: {
      preview: "/picture/bed/bed-6.webp",
      previewAlt: "【全護】高階護理床",
      list: [],
    },
  },
  {
    id: 104,
    type: "bed",
    name: "【樂護】標準病床",
    level: "3",
    rent: 50000.0,
    deposit: 25000.0,
    fee: 200.0,
    description:
      "標準病床具有靜音運作, 記憶床墊, 簡易操作, 升降功能等特點，採用高強度鋼製成，承重可達200公斤。適合長期照護或短期復健需求，升降功能與多角度調整提供使用者舒適體驗，並確保看護者操作便利。",
    info: [
      {
        infokey: "material",
        infovalue: "高強度鋼",
      },
      {
        infokey: "origin",
        infovalue: "日本",
      },
      {
        infokey: "load",
        infovalue: "200",
      },
    ],
    features: ["靜音運作", "記憶床墊", "簡易操作", "升降功能"],
    image: {
      preview: "/picture/bed/bed-7.webp",
      previewAlt: "【樂護】標準病床",
      list: [],
    },
  },
];
