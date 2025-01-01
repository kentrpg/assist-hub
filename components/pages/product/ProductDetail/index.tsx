import React from "react";
import { ProductItem } from "./data";
import {
  ComparisonContainer,
  Header,
  GridContainer,
  Row,
  Cell,
  Item,
  Image,
  Button,
  Container,
  Info,
  Span,
  Feature,
} from "./styled";
import { MdShoppingCart, MdCheck } from "react-icons/md";

type ProductDetailsProps = {
  product: ProductItem;
};

const Product: React.FC<ProductDetailsProps> = ({ product }) => {
  const items = [
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
  return (
    <Container>
      <Info>
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
      </Info>
      
      <Header>相同類型輔具比較</Header>
      <ComparisonContainer>
        <GridContainer>
          <Row>
            <Cell>輔具圖片</Cell>
            {items.map((item, index) => (
              <Item key={index}>
                <Image src="/images/wheelChair.svg" alt={item.name} />
                <Button>
                  <MdShoppingCart size={24} />
                  加入購物車
                </Button>
              </Item>
            ))}
          </Row>
          <Row $bg>
            <Cell>名稱</Cell>
            {items.map((item, index) => (
              <Cell $border key={index}>
                {item.name}
              </Cell>
            ))}
          </Row>
          <Row>
            <Cell>租金</Cell>
            {items.map((item, index) => (
              <Cell $isEm $border key={index}>
                {item.price}
              </Cell>
            ))}
          </Row>
          <Row $bg>
            <Cell>材質</Cell>
            {items.map((item, index) => (
              <Cell $border key={index}>
                {item.material}
              </Cell>
            ))}
          </Row>
          <Row>
            <Cell>特色</Cell>
            {items.map((item, index) => (
              <Cell $border key={index}>
                <Feature>
                  {item.features.map((feature, i) => (
                    <Span key={i}>
                      <MdCheck size={16} /> {feature}
                    </Span>
                  ))}
                </Feature>
              </Cell>
            ))}
          </Row>
        </GridContainer>
      </ComparisonContainer>
    </Container>
  );
};

export default Product;
