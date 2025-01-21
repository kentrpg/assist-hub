import styled from "styled-components";
import theme from "@/styles/theme";
import {
  Container1344,
  ExtraLarge,
  Desktop,
  Tablet,
  Mobile,
} from "@/styles/container";

type CardProps = {
  $bg: "primaryLight" | "accentLight";
};

type TitleProps = {
  $color: "primary" | "accent";
};

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Title = styled.h6<TitleProps>`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 14px;
  border-bottom: solid 1px ${(props) => theme.colors[props.$color]};
  color: ${(props) => theme.colors[props.$color]};
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  width: 100%;
  @media (${Mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (${Desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div<CardProps>`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => theme.colors[props.$bg]};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    outline: 1px solid #103f99;
  }
  &:hover ${() => CardBtn} {
    opacity: 1;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  max-height: 190px;
  height: 190px; 
  object-fit: contain;
`;

export const InquiryIcon = styled.div`
  background-image: url("/images/accessible.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 21px;
  height: 21px;
`;

export const CardBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
  top: 20px;
  right: 20px;
  background-color: #ffcc1a;
  border: none;
  border-radius: 30px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  opacity: 0;
  transform: translateY(-10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #b28f12;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const Name = styled.span`
  color: #08204d;
  font-size: 14px;
  font-weight: 500;
`;

export const Rent = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
