import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items, carouselItems, ProductItem } from "./data";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdShoppingCart,
  MdCheck,
} from "react-icons/md";
import { FeatureBadge } from "@/components/ui/badges";
import {
  InfoContainer,
  ComparisonContainer,
  GridContainer,
  ComparisonHeader,
  Row,
  Cell,
  ComparisonItem,
  ComparisonImg,
  Container,
  Feature,
  RecommendedContainer,
  RecommendedHeader,
  CarouselItem,
  CarouselImg,
  CarouselInfo,
  CarouselTitle,
  CarouselPrice,
  Title,
  Tags,
  Detail,
  InfoImage,
  InfoImages,
  Thumbnail,
  RentBtn,
  InquiryBtn,
  InquiryIcon,
  ComparisonBtn,
  ImageWrapper,
} from "./styled";
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
      {/* 商品資訊 */}
      <InfoContainer>
        <InfoImages>
          <ImageWrapper>
            <InfoImage src="/images/infoMain.png" alt={product.name} />
          </ImageWrapper>
          <Thumbnail>
            <img src="/images/info1.png" alt="" />
            <img src="/images/info2.png" alt="" />
            <img src="/images/info3.png" alt="" />
            <img src="/images/info4.png" alt="" />
          </Thumbnail>
        </InfoImages>
        <Detail>
          <Title>{product.name}</Title>
          <Tags>
            {product.feature.map((tag, index) => (
              <FeatureBadge key={index}>
                <MdCheck size={16} />
                {tag}
              </FeatureBadge>
            ))}
          </Tags>
          <div>
            <p>租金: ${product.rent}/月</p>
            <p>押金: ${product.deposit}元</p>
          </div>
          <div>
            <h5>商品描述:</h5>
            <p> {product.description}</p>
          </div>
          <div>
            <h2>商品資訊:</h2>
            <p>材質: {product.info.material}</p>
            <p>載重: {product.info.load}</p>
            <p>產地: {product.info.origin}</p>
          </div>
          <div>
            <RentBtn>
              立即租賃
              <InquiryIcon />
            </RentBtn>
            <InquiryBtn></InquiryBtn>
          </div>
        </Detail>
      </InfoContainer>
      {/* 比較商品 */}
      <ComparisonContainer>
        <ComparisonHeader>相同類型輔具比較</ComparisonHeader>
        <GridContainer>
          <Row>
            <Cell></Cell>
            {items.map((item, index) => (
              <ComparisonItem key={index}>
                <ComparisonImg src="/images/wheelChair.svg" alt={item.name} />
                <ComparisonBtn>
                  <MdShoppingCart size={24} />
                  加入購物車
                </ComparisonBtn>
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
                    <FeatureBadge key={i}>
                      <MdCheck size={16} /> {feature}
                    </FeatureBadge>
                  ))}
                </Feature>
              </Cell>
            ))}
          </Row>
        </GridContainer>
      </ComparisonContainer>
      {/* 輪播 */}
      <RecommendedContainer>
        <RecommendedHeader>其他人也買</RecommendedHeader>
        <Slider
          {...sliderSettings}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
        >
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <CarouselImg>
                <img
                  src="/images/wheelChair.svg"
                  width={260}
                  height={190}
                  alt={item.name}
                />
              </CarouselImg>
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
