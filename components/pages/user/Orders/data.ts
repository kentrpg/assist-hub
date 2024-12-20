export type Order = {
  deliveryType: "自取" | "宅配";
  orderId: string;
  createdTime: string;
  finishedDate: string;
  status: "租賃中" | "已結案";
  quantity: number;
  rent: number;
  deliveryFee: number;
  deposit: number;
  description: string;
};

export const orders: Order[] = [
  {
    deliveryType: "宅配",
    orderId: "333LHJ",
    createdTime: "2024/12/24 7:32 PM",
    finishedDate: "預計抵達日期 2025/01/21",
    status: "租賃中",
    quantity: 1,
    rent: 1000,
    deliveryFee: 200,
    deposit: 500,
    description: "外出旅遊輕便輪椅首選車款。輕量設計，女性也能輕易搬運。",
  },
  {
    deliveryType: "自取",
    orderId: "356KJL",
    createdTime: "2024/11/04 7:32 PM",
    finishedDate: "於2024/11/27完成取件",
    status: "已結案",
    quantity: 4,
    rent: 1000,
    deliveryFee: 0,
    deposit: 500,
    description:
      "停電時可繼續操作使用1~2小時，內建UPS不斷電控制盒，床頭護欄內外鍵升降控制，並附安全鎖定功能",
  },
];
