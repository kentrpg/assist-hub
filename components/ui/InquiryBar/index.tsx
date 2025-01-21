import React from "react";
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
  EmptyCircle, 
  EmptyCircleText,
} from "./styled";
import { MdOutlineClose } from "react-icons/md";
import { RootState } from "@/utils/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromInquiryBar } from "@/utils/redux/slices/inquiryBar";

const InquiryBar = () => {
  const inquiryBar = useSelector((state: RootState) => state.inquiryBar);
  const dispatch = useDispatch();

  // 動態生成剩餘的「空的圈圈」
  const emptySlots = Array(3 - inquiryBar.length)
    .fill(null)
    .map((_, index) => index + inquiryBar.length + 1);

  // 如果沒有任何商品，則不顯示 Bar
  if (inquiryBar.length === 0) return null;

  return (
    <BarContainer>
      <Products>
        {/* 已添加的商品 */}
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

        {/* 空的圈圈帶提示 */}
        {emptySlots.map((slotNumber) => (
          <EmptyCircle key={slotNumber}>
            <EmptyCircleText>
              {slotNumber.toString().padStart(2, "0")}
            </EmptyCircleText>
          </EmptyCircle>
        ))}
      </Products>
      <InquiryBtn>前往詢問單</InquiryBtn>
    </BarContainer>
  );
};

export default InquiryBar;