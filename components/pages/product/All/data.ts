export type ProductItem = {
  id: number;
  type: string;
  name: string;
  level: string;
  rent: number;
  imgSrc: string;
  imgAlt: string;
};

export type ProductApiResponse = {
  status: number;
  message: string;
  data: ProductItem[];
};
