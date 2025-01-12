import styled from "styled-components";
import theme from "@/styles/theme";
import {
  Container1344,
  ExtraLarge,
  Desktop,
  Tablet,
  Mobile,
} from "@/styles/container";

type TabProps = {
  $isSelected?: boolean; // 動態樣式屬性
};

type CardProps = {
  $bg: "primaryLight" | "accentLight";
};

type TitleProps = {
  $color: "primary" | "accent";
};

export const Container = styled(Container1344)`
  display: flex;
  flex-direction: column;
  column-gap: 6px;
  @media (${Desktop}) {
    flex-direction: row;
  }
`;

export const SideBar = styled.div`
  padding: 16px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media (${Desktop}) {
    padding: 16px 12px;
    max-width: 366px;
  }
`;

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const LevelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Type = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #08204d;
`;

export const Level = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #08204d;
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  width: 100%;
  @media (${Desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Tab = styled.div<TabProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: #e9e5de 1px solid;
  border-radius: 10px;
  padding-top: 10px 0px;
  width: 100%;
  height: 88px;
  overflow: hidden;
  cursor: pointer;
  @media (${Desktop}) {
    max-width: 167px;
  }

  ${({ $isSelected }) =>
    $isSelected &&
    `
    border: 1px solid #000000;
    justify-content: start;
  `}

  &:hover {
    justify-content: start;
  }

  img {
    transition: all 0.3s ease;
    ${({ $isSelected }) =>
      $isSelected &&
      `
      width: 33px;
      height: 33px;
    `}
  }

  &:hover img {
    width: 33px;
    height: 33px;
  }

  div:first-child {
    transition: height 0.3s ease;
    ${({ $isSelected }) =>
      $isSelected &&
      `
      height: 56px;
    `}
  }

  &:hover div:first-child {
    height: 56px;
  }

  div:last-child {
    transition: all 0.3s ease;
    transform: translateY(100%);
    opacity: 0;

    ${({ $isSelected }) =>
      $isSelected &&
      `
      transform: translateY(0);
      opacity: 1;
      height: 32px;
    `}
  }

  &:hover div:last-child {
    transform: translateY(0);
    opacity: 1;
    height: 32px;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Img = styled.img`
  width: 66px;
  height: 66px;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #103f99;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 0 0 10px 10px;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const Radios = styled.div`
  outline: solid 1px #e9e5de;
`;

export const Radio = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  column-gap: 6px;
  border-bottom: solid 1px #e9e5de;

  &:last-child {
    border-bottom: none;
  }
`;

export const RadioIcon = styled.div`
  display: flex;
`;

export const RadioText = styled.div`
  display: flex;
`;

export const FilterWrapper = styled.div`
  padding: 16px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media (${Desktop}) {
    padding: 16px 12px;
  }
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    outline: 1px solid #103f99;
  }
  &:hover ${() => CardBtn} {
    opacity: 1;
  }
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
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #b28f12;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  max-height: 190px;
  margin: 0;
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

export const WheelChair = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const Crutch = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const Bed = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const Oxygen = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
