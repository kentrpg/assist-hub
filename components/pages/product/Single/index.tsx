import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items, carouselItems } from "./data";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { ProductItem } from "./data";
import {
  ComparisonContainer,
  GridContainer,
  ComparisonHeader,
  Row,
  Cell,
  ComparisonItem,
  ComparisonImage,
  Button,
  Container,
  Info,
  Span,
  Feature,
  RecommendedContainer,
  RecommendedHeader,
  CarouselItem,
  CarouselImage,
  CarouselInfo,
  CarouselTitle,
  CarouselPrice,
} from "./styled";
import { MdShoppingCart, MdCheck } from "react-icons/md";
import { sliderSettings } from "./data";

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-prev" onClick={onClick}>
    <MdArrowBackIosNew size={40} color="#103F99" />
  </div>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-next" onClick={onClick}>
    <MdArrowForwardIos size={40} color="#103F99" />
  </div>
);

type ProductDetailsProps = {
  product: ProductItem;
};

const Single: React.FC<ProductDetailsProps> = ({ product }) => {
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

      <ComparisonContainer>
        <ComparisonHeader>相同類型輔具比較</ComparisonHeader>
        <GridContainer>
          <Row>
            <Cell></Cell>
            {items.map((item, index) => (
              <ComparisonItem key={index}>
                <ComparisonImage src="/images/wheelChair.svg" alt={item.name} />
                <Button>
                  <MdShoppingCart size={24} />
                  加入購物車
                </Button>
              </ComparisonItem>
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
              <Cell $border $feature key={index}>
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
      <RecommendedContainer>
        <RecommendedHeader>其他人也買</RecommendedHeader>
        <Slider
          {...sliderSettings}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
        >
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <CarouselImage>
                <img
                  src="/images/wheelChair.svg"
                  width={260}
                  height={190}
                  alt={item.name}
                />
              </CarouselImage>
              <CarouselInfo>
                <CarouselTitle>{item.name}</CarouselTitle>
                <CarouselPrice>{item.price}</CarouselPrice>
              </CarouselInfo>
            </CarouselItem>
          ))}
        </Slider>
      </RecommendedContainer>
    </Container>
  );
};

export default Single;
