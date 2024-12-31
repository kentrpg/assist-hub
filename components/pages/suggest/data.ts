import type { InquiryInfoProps } from "@/components/ui/Detail/data";

export const suggestInfo: InquiryInfoProps = {
  "orderId": "AKC833",
  "createdDate": "2024/10/04",
  "actionAssessment": "具平地跑跳能力",
  "description": "需好好休息2個月，避免用受傷的腳出力，必要時抬高腳增加血液循環。" 
};

export type SuggestDetailProps = {
  data: InquiryInfoProps;
  mapping: Record<keyof InquiryInfoProps, string>;
};

type SuggestCardProps = {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  imgSrc: string;
  reasons: string[];
};

export const assistiveRecommendations: SuggestCardProps[] = [
  {
    id: "1",
    name: "精品輪椅",
    description:
      "針對行動不便且需要長時間移動的患者，我們特別推薦這款電動輪椅。它不僅操作簡單，還能顯著提升患者的日常活動自主性和生活品質。",
    price: "2,000元 /月",
    features: ["體積小", "支撐性高", "可調節"],
    imgSrc: "device4.png",
    reasons: [
      "針對您描述的肢體活動限制",
      "可調節座椅高度和角度",
      "適合長時間使用",
    ],
  },
  {
    id: "2",
    name: "拐杖",
    description:
      "為需要部分支撐的患者設計，提供穩定的行走支援，增加日常活動的安全性和信心。",
    price: "1,000元 /月",
    features: ["輕量鋁合金", "可折疊", "防腳滑墊"],
    imgSrc: "device5.png",
    reasons: [
      "適合輕度行動限制",
      "可調節支撐程度",
      "攜帶方便",
    ],
  },
];