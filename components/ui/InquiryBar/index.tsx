import React, { useEffect, useState } from "react";
import {
  BarContainer,
  Product,
  Products,
  Name,
  Rent,
  Img,
  Info,
  InquiryBtn,
  DeleteBtn,
  IconWrapper,
} from "./styled";
import { MdOutlineClose } from "react-icons/md";
import { RootState } from "@/utils/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromInquiryBar } from "@/utils/redux/slices/inquiryBar";

const InquiryBar = () => {
  const inquiryBar = useSelector((state: RootState) => state.inquiryBar);
  const dispatch = useDispatch();
  
  return (
    <BarContainer>
      <Products>
        {inquiryBar.map((product) => (
          <Product key={product.id}>
            <DeleteBtn
              onClick={() => dispatch(removeFromInquiryBar(product.id))}
            >
              <IconWrapper>
                <MdOutlineClose size={16} color="white" />
              </IconWrapper>
            </DeleteBtn>
            <Img src={product.imgSrc} alt={product.name} />
            <Info>
              <Name>{product.name}</Name>
              <Rent>{product.rent}元</Rent>
            </Info>
          </Product>
        ))}
      </Products>
      <InquiryBtn>前往詢問單 ({inquiryBar.length}/3)</InquiryBtn>
    </BarContainer>
  );
};

export default InquiryBar;
