import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductItem, ComparisonItem, RecommendedItem } from "./data";
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
  Grid,
  ComparisonHeader,
  Row,
  Cell,
  ComparisonContent,
  ComparisonImg,
  Container,
  Feature,
  RecommendedContainer,
  RecommendedHeader,
  CarouselItem,
  CarouselImg,
  CarouselInfo,
  CarouselTitle,
  CarouselRent,
  Title,
  Tags,
  Detail,
  RentBtn,
  InquiryBtn,
  ComparisonBtn,
  Deposit,
  PriceField,
  Description,
  DesWord,
  SubTitle,
  InfoField,
  BtnField,
  InquiryIcon,
  ComparisonProduct,
  CarouselBtn,
  ComparisonProductName,
} from "./styled";
import { sliderSettings } from "./data";
import Gallery from "./Gallery";
import BreadCrumb from "./BreadCrumb";
import Accordion from "./Accordion";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";
import { useDispatch } from "react-redux";
import { addToInquiryBar } from "@/utils/redux/slices/inquiryBar";
import Link from "next/link";
import Loading from "@/components/ui/Loading";
import { useToast } from "@/components/ui/Toast";
import { useModal } from "@/components/ui/Modal";

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
  comparison: ComparisonItem[];
  recommended: RecommendedItem[];
};

const Single: React.FC<ProductDetailsProps> = ({
  product,
  comparison,
  recommended,
}) => {
  console.log("product", product);
  const [isLoading, setIsLoading] = useState(false);
  const { openToast, Toast } = useToast();
  const { openModal, Modal } = useModal();

  const dispatch = useDispatch();
  const inquiryBar = useSelector((state: RootState) => state.inquiryBar);

  const handleAddCurrentProductToInquiryBar = () => {
    if (inquiryBar.length >= 3) {
      openModal("⚠️ 詢問單最多只能添加 3 個商品！");
      return;
    }
    const exists = inquiryBar.some((item) => item.id === product.id);
    if (exists) {
      openModal("⚠️ 該商品已經在詢問單中！");
      return;
    }
    dispatch(
      addToInquiryBar({
        id: product.id,
        imgSrc: product.image.preview,
        imgAlt: product.image.previewAlt,
        name: product.name,
        rent: product.rent,
        features: product.features,
        description: product.description,
      }),
    );
    openToast("商品成功加入詢問單！", "success");
  };

  const handleAddCarouselProductToInquiryBar = (carouselProductId: number) => {
    if (inquiryBar.length >= 3) {
      openModal("⚠️ 詢問單最多只能添加 3 個商品！");
      return;
    }
    const exists = inquiryBar.some((item) => item.id === carouselProductId);
    if (exists) {
      openModal("⚠️ 該商品已經在詢問單中！");
      return;
    }
    const productToAdd = recommended.find(
      (item) => item.productId === carouselProductId,
    );
    if (productToAdd) {
      dispatch(
        addToInquiryBar({
          id: productToAdd.productId,
          imgSrc: productToAdd.imgSrc,
          imgAlt: productToAdd.imgSrc,
          name: productToAdd.name,
          rent: productToAdd.rent,
          features: productToAdd.features,
          description: productToAdd.description,
        }),
      );
      openToast("商品成功加入詢問單！", "success");
    } else {
      openModal("❌ 找不到該商品！");
    }
  };

  const handleAddToCart = async (productId: number) => {
    if (isLoading) return; // 如果正在處理，則不再繼續執行

    setIsLoading(true); // 設定為正在處理
    console.log("handleAddToCart", productId);

    try {
      const res = await fetch("/api/postCarts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: productId,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();

      if (result.status) {
        openToast("成功加入購物車！", "success");
      } else {
        openModal(`⚠️ 加入購物車失敗：${result.message}`);
      }
    } catch (error) {
      console.error("加入購物車時發生錯誤：", error);
      openModal("❌ 加入購物車時發生錯誤，請稍後再試！");
    } finally {
      setIsLoading(false); // 完成後將 loading 設為 false
    }
  };

  return (
    <Container>
      {/* 麵包屑 */}
      <BreadCrumb product={product} />
      {/* 商品資訊 */}
      <InfoContainer>
        <Gallery
          key={product.id}
          initialImage={product.image.preview}
          thumbnails={
            product.image.list.length > 0
              ? product.image.list
              : [product.image.preview]
          }
        />
        <Detail>
          <Title>{product.name}</Title>
          <Tags>
            {product.features.map((tag, index) => (
              <FeatureBadge key={index}>
                <MdCheck size={16} />
                {tag}
              </FeatureBadge>
            ))}
          </Tags>
          <PriceField>
            <SubTitle>租金: ${product.rent.toLocaleString()}/月</SubTitle>
            <Deposit>押金: ${product.deposit.toLocaleString()}元</Deposit>
          </PriceField>
          <Description>
            <SubTitle>商品描述</SubTitle>
            <DesWord>{product.description}</DesWord>
          </Description>
          <InfoField>
            <SubTitle>商品資訊</SubTitle>
            <p>材質: {product.info.material}</p>
            <p>載重: {product.info.load}</p>
            <p>產地: {product.info.origin}</p>
          </InfoField>
          <BtnField>
            <RentBtn onClick={() => handleAddToCart(product.id)}>
              <MdShoppingCart size={27} />
              {isLoading ? <Loading /> : "加入購物車"}
            </RentBtn>
            <InquiryBtn onClick={handleAddCurrentProductToInquiryBar}>
              <InquiryIcon />
              <span>加入詢問單</span>
            </InquiryBtn>
          </BtnField>
          <Accordion />
        </Detail>
      </InfoContainer>
      {/* 比較商品 */}
      <ComparisonContainer>
        <ComparisonHeader>相同類型輔具比較</ComparisonHeader>
        <ComparisonContent>
          <Grid>
            <Row>
              <Cell $border></Cell>
              {comparison.map((item, index) => (
                <Link key={index} href={`/product/${item.productId}`} passHref>
                  <ComparisonProduct key={index}>
                    <ComparisonImg
                      src={item.imgSrc || "/images/wheelChair.svg"}
                      alt={item.name}
                    />
                    <ComparisonBtn
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(item.productId);
                      }}
                    >
                      <MdShoppingCart size={24} />
                      加入購物車
                    </ComparisonBtn>
                  </ComparisonProduct>
                </Link>
              ))}
            </Row>
            <Row $bg>
              <Cell $bg="#F9F8F6" $border>
                名稱
              </Cell>
              {comparison.map((item, index) => (
                <Cell $border key={index}>
                  <ComparisonProductName>{item.name}</ComparisonProductName>
                </Cell>
              ))}
            </Row>
            <Row>
              <Cell $border>租金</Cell>
              {comparison.map((item, index) => (
                <Cell $isEm $border key={index}>
                  ${item.rent.toLocaleString()}
                </Cell>
              ))}
            </Row>
            <Row $bg>
              <Cell $bg="#F9F8F6" $border>
                材質
              </Cell>
              {comparison.map((item, index) => (
                <Cell $border key={index}>
                  {item.material || "無資料"}
                </Cell>
              ))}
            </Row>
            <Row>
              <Cell $border>特色</Cell>
              {comparison.map((item, index) => (
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
          </Grid>
        </ComparisonContent>
      </ComparisonContainer>
      {/* 輪播 */}
      <RecommendedContainer>
        <RecommendedHeader>其他人也買</RecommendedHeader>
        <Slider
          {...sliderSettings}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
        >
          {recommended.map((item, index) => (
            <CarouselItem key={index}>
              <Link key={index} href={`/product/${item.productId}`} passHref>
                <CarouselImg>
                  <img
                    src={item.imgSrc || "/images/wheelChair.svg"}
                    width={260}
                    height={190}
                    alt={item.name}
                  />
                </CarouselImg>
                <CarouselInfo>
                  <CarouselTitle>{item.name}</CarouselTitle>
                  <CarouselRent>${item.rent.toLocaleString()}</CarouselRent>
                </CarouselInfo>
                <CarouselBtn
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddCarouselProductToInquiryBar(item.productId);
                  }}
                >
                  <InquiryIcon />
                  加入詢問單
                </CarouselBtn>
              </Link>
            </CarouselItem>
          ))}
        </Slider>
      </RecommendedContainer>
      <Toast />
      <Modal />
    </Container>
  );
};

export default Single;
