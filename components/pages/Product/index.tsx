import React from "react";
import { ProductItem } from "./data";

type ProductDetailsProps = {
  product: ProductItem;
};

const Product: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <h1>商品名稱: {product.name}</h1>
      <img src={product.image} alt={product.name} width={200} height={200} />
      <p>商品描述: {product.description}</p>
      <p>租金: ${product.rent}/月</p>
      <p>押金: ${product.deposit}元</p>
      <p>運費: ${product.fee}元</p>
      <p>
        Tags:
        {product.feature.map((tag, index) => (
          <span key={index} style={{ marginRight: "8px", color: "red" }}>
            {tag}
          </span>
        ))}
      </p>
      <div>
        <h2>商品資訊:</h2>
        <p>材料: {product.info.material}</p>
        <p>載重: {product.info.load}</p>
        <p>產地: {product.info.origin}</p>
      </div>
    </div>
  );
};

export default Product;
