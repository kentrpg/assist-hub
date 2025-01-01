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
