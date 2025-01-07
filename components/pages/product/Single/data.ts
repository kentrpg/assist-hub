export type ProductInfo = {
  material: string;
  load: string;
  origin: string;
};

export type ProductItem = {
  id: number;
  type: string;
  name: string;
  level: string;
  rent: number;
  deposit: number;
  fee: number;
  description: string;
  info: ProductInfo;
  feature: string[];
  image: string;
};

export type ProductPageProps = {
  product: ProductItem;
};

export const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 100,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 1096,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
      },
    },
  ],
};

export const items = [
  {
    name: "手動輪椅",
    price: "$2,000",
    material: "鋁合金",
    features: ["摺疊設計", "可調節"],
  },
  {
    name: "手動輪椅",
    price: "$1,200",
    material: "鋁合金",
    features: ["摺疊設計", "可調節"],
  },
  {
    name: "高級輪椅",
    price: "$1,500",
    material: "複合材料",
    features: ["摺疊設計", "可調節"],
  },
  {
    name: "電動輪椅",
    price: "$5,000",
    material: "碳纖維",
    features: ["摺疊設計", "可調節"],
  },
];

export const carouselItems = [
  {
    name: "手動輪椅",
    price: "$2,000",
    material: "鋁合金",
    features: ["摺疊設計", "可調節"],
  },
  {
    name: "普通輪椅",
    price: "$1,200",
    material: "鋁合金",
    features: ["摺疊設計", "可調節"],
  },
  {
    name: "高級輪椅",
    price: "$1,500",
    material: "複合材料",
    features: ["摺疊設計", "可調節"],
  },
  {
    name: "電動輪椅",
    price: "$5,000",
    material: "碳纖維",
    features: ["摺疊設計", "可調節"],
  },
  {
    name: "兒童輪椅",
    price: "$1,800",
    material: "鋁合金",
    features: ["輕量化", "可調節"],
  },
  {
    name: "運動型輪椅",
    price: "$3,000",
    material: "碳纖維",
    features: ["高速設計", "可摺疊"],
  },
  {
    name: "舒適輪椅",
    price: "$2,800",
    material: "鋁合金",
    features: ["人體工學設計", "可調節"],
  },
  {
    name: "全地形輪椅",
    price: "$6,000",
    material: "複合材料",
    features: ["越野能力", "耐用設計"],
  },
];
