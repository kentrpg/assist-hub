import styled from "styled-components";
import { Container1344 } from "@/styles/container";
import { Tablet, Desktop, Mobile, ExtraLarge } from "@/styles/container";

export const BarContainer = styled(Container1344)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 90px;
  outline: 1px solid #08204d;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  z-index: 1000;
  transition:
    transform 0.3s ease,
    bottom 0.3s ease;
`;

export const Products = styled.div`
  display: flex;
  column-gap: 40px;
`;

export const Product = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const Rent = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const Img = styled.img`
  object-fit: contain;
  width: 80px;
  height: 80px;
`;

export const InquiryBtn = styled.button`
  border-radius: 30px;
  background-color: #103f99;
  color: white;
  padding: 10px 40px;
  font-size: 18px;
  height: 47px;
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #103f99;
  width: 24px;
  height: 24px;
`;

export const DeleteBtn = styled.button`
  align-self: baseline;
  background-color: white;
`;

// 空圈圈樣式
export const EmptyCircle = styled.div`
  width: 50px;
  height: 50px;
  border: 2px dashed #ccc; // 使用虛線
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  position: relative;
`;

// 圈圈內的文字樣式
export const EmptyCircleText = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #08204d; // 深藍色
`;
