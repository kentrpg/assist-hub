export type InquiryData = {
  id: string;
  products: string[];
  createdDate: string;
  isSuggest: boolean;
  status: string;
};

export const inquiries: InquiryData[] = [
  {
    id: "AKC833",
    products: [
      "/images/wheelChair.svg",
      "/images/wheelChair.svg",
      "/images/wheelChair.svg",
    ],
    createdDate: "2024/10/04",
    isSuggest: true,
    status: "已回覆",
  },
  {
    id: "KDO694",
    products: [
      "/images/wheelChair.svg",
      "/images/wheelChair.svg",
      "/images/wheelChair.svg",
    ],
    createdDate: "2024/10/04",
    isSuggest: false,
    status: "未回覆",
  },
  {
    id: "NKD836",
    products: [
      "/images/wheelChair.svg",
      "/images/wheelChair.svg",
      "/images/wheelChair.svg",
    ],
    createdDate: "2024/10/04",
    isSuggest: false,
    status: "未回覆",
  },
];
