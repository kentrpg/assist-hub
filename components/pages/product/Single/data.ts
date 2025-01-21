export type ProductInfo = {
  material: string;
  origin: string;
  load: string;
};

export type ProductImage = {
  preview: string;
  previewAlt: string;
  list: string[];
  listAlt: string[];
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
  features: string[];
  image: ProductImage;
  manual: string;
};

export type ComparisonItem = {
  productId: number;
  imgSrc: string;
  name: string;
  rent: number;
  material: string;
  features: string[];
};

export type RecommendedItem = {
  productId: number;
  imgSrc: string;
  name: string;
  rent: number;
};

export type SinglePageProps = {
  product: ProductItem;
  comparison: ComparisonItem[];
  recommended: RecommendedItem[];
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
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 1096,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
      },
    },
  ],
};
