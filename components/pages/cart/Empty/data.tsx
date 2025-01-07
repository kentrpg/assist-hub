type CartStepsProps = {
  id: string;
  description: string;
  imgSrc: string;
};

export const CartSteps: CartStepsProps[] = [
  {
    id: "1",
    description: "在家裡就可以挑選輔具",
    imgSrc: "/images/cart-empty-1.png",
  },
  {
    id: "2",
    description: "租賃試用體驗，再決定是否購買",
    imgSrc: "/images/cart-empty-2.png",
  },
  {
    id: "3",
    description: "隨著康復進展，提供合適輔具",
    imgSrc: "/images/cart-empty-3.png",
  },
];
