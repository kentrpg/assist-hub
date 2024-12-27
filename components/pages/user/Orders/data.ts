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
  period: number;
  payment: string;
  name: string;
  phone: string;
  email: string;
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
    period: 1,
    payment: "Line Pay",
    name: "王小姐",
    phone: "0912-345678",
    email: "A12345678@gmail.com",
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
    period: 2,
    payment: "Line Pay",
    name: "王小姐",
    phone: "0912-345678",
    email: "A12345678@gmail.com",
  },
  {
    deliveryType: "宅配",
    orderId: "788ABC",
    createdTime: "2024/10/01 3:00 PM",
    finishedDate: "預計抵達日期 2024/10/15",
    status: "租賃中",
    quantity: 2,
    rent: 1500,
    deliveryFee: 300,
    deposit: 1000,
    description: "折疊式電動輪椅，輕便可攜，適合室內外使用。",
    period: 3,
    payment: "信用卡",
    name: "李先生",
    phone: "0987-654321",
    email: "B98765432@gmail.com",
  },
  {
    deliveryType: "自取",
    orderId: "456DEF",
    createdTime: "2024/09/15 1:00 PM",
    finishedDate: "於2024/09/20完成取件",
    status: "租賃中",
    quantity: 3,
    rent: 1200,
    deliveryFee: 0,
    deposit: 600,
    description: "高性能電動輪椅，適合長時間使用。",
    period: 1,
    payment: "現金",
    name: "張小姐",
    phone: "0911-223344",
    email: "C22334455@gmail.com",
  },
  {
    deliveryType: "宅配",
    orderId: "123GHI",
    createdTime: "2024/08/10 10:00 AM",
    finishedDate: "預計抵達日期 2024/08/25",
    status: "租賃中",
    quantity: 1,
    rent: 1800,
    deliveryFee: 250,
    deposit: 800,
    description: "豪華款護理床，提供最佳舒適度。",
    period: 2,
    payment: "信用卡",
    name: "陳先生",
    phone: "0977-556677",
    email: "D55667788@gmail.com",
  },
  {
    deliveryType: "自取",
    orderId: "987JKL",
    createdTime: "2024/07/05 5:30 PM",
    finishedDate: "於2024/07/12完成取件",
    status: "已結案",
    quantity: 1,
    rent: 800,
    deliveryFee: 0,
    deposit: 300,
    description: "輕量化折疊式助行器，適合短期租借。",
    period: 1,
    payment: "Line Pay",
    name: "林小姐",
    phone: "0923-445566",
    email: "E44556677@gmail.com",
  },
  {
    deliveryType: "宅配",
    orderId: "654MNO",
    createdTime: "2024/06/18 8:15 PM",
    finishedDate: "預計抵達日期 2024/07/05",
    status: "已結案",
    quantity: 2,
    rent: 1400,
    deliveryFee: 200,
    deposit: 700,
    description: "多功能升降椅，方便日常使用。",
    period: 3,
    payment: "現金",
    name: "趙先生",
    phone: "0966-778899",
    email: "F77889900@gmail.com",
  },
];
