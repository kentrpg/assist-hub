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
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
    ],
    createdDate: "2024/10/04",
    isSuggest: true,
    status: "已回覆",
  },
  {
    id: "KDO694",
    products: [
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
    ],
    createdDate: "2024/10/04",
    isSuggest: false,
    status: "未回覆",
  },
  {
    id: "NKD836",
    products: [
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
    ],
    createdDate: "2024/10/04",
    isSuggest: false,
    status: "未回覆",
  },
];
