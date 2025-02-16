import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToInquiryBar } from "@/utils/redux/slices/inquiryBar";
import { RootState } from "@/utils/redux/store";
import Link from "next/link";
import {
  Title,
  CardWrapper,
  Card,
  CardImg,
  Info,
  Name,
  Rent,
  CardBtn,
  InquiryIcon,
  CategoryContainer,
} from "./styled";
import { ResultGetProducts } from "@/types/getProducts";
import { useModal } from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";

type ProductCategoryProps = {
  title: string;
  color: "primary" | "accent";
  bgColor: "primaryLight" | "accentLight";
  type: string;
  products: typeof ResultGetProducts.data;
};

const Category: React.FC<ProductCategoryProps> = ({
  title,
  color,
  bgColor,
  type,
  products,
}) => {
  const dispatch = useDispatch();
  const inquiryBar = useSelector((state: RootState) => state.inquiryBar);
  const { openModal, Modal } = useModal();
  const { openToast, Toast } = useToast();

  const handleAddToInquiryBar = (
    product: (typeof ResultGetProducts.data)[number],
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();
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
        imgSrc: product.imgSrc,
        imgAlt: product.imgAlt,
        name: product.name,
        rent: product.rent,
        features: product.features,
        description: product.description,
      }),
    );
    openToast("商品成功加入詢問單", "success");
  };

  const filteredProducts = products.filter((product) => product.type === type);

  if (filteredProducts.length === 0) return null;

  return (
    <CategoryContainer>
      <Title $color={color}>{title}</Title>
      <CardWrapper>
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            <Card $bg={bgColor}>
              <CardImg
                src={product.imgSrc}
                alt={product.imgAlt || product.name}
              />
              <Info>
                <Name>{product.name}</Name>
                <Rent>${product.rent.toLocaleString()}</Rent>
              </Info>
              <CardBtn onClick={(e) => handleAddToInquiryBar(product, e)}>
                <InquiryIcon />
                加入詢問單
              </CardBtn>
            </Card>
          </Link>
        ))}
      </CardWrapper>
      <Toast />
      <Modal />
    </CategoryContainer>
  );
};

export default Category;
