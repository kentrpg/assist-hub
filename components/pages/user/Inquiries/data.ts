export type InquiryData = {
  id: string;
  products: string[];
  createdDate: string;
  status: string;
  isSuggest: boolean;
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
    status: "店家已評估",
    isSuggest: true,
  },
  {
    id: "KDO694",
    products: [
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
    ],
    createdDate: "2024/10/04",
    status: "店家評估中",
    isSuggest: false,
  },
  {
    id: "NKD836",
    products: [
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
      "https://shoplineimg.com/5aa0e7330e64fed450000634/5e9530a47692440039880802/800x.jpg?",
    ],
    createdDate: "2024/10/04",
    status: "店家評估中",
    isSuggest: false,
  },
];
