import styled from "styled-components";
import { Container1344 } from "@/styles/container";
import theme from "@/styles/theme";

type CardProps = {
  $bg: "primaryLight" | "accentLight";
};

type TitleProps = {
  $color: "primary" | "accent";
};

export const Container = styled(Container1344)`
  display: flex;
  column-gap: 6px;
`;

export const SideBar = styled.div`
  padding: 16px 12px;
  max-width: 366px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const TypeWrapper = styled.div``;
export const LevelWrapper = styled.div``;

export const Type = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #08204d;
`;

export const Level = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #08204d;
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  padding: 12px 0px;
`;

export const Tab = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: #e9e5de 1px solid;
  border-radius: 10px;
  max-width: 167px;
  padding-top: 10px 0px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover img {
    width: 33px;
    height: 33px;
  }

  &:hover div {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 66px;
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
  transform: translate(-50%, -50%) scale(1); /* 將中心點設為縮放中心 */
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%; /* 占容器的下半部分 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #103f99; /* 背景顏色 */
  color: #fff; /* 字體顏色 */
  font-size: 16px;
  font-weight: 700;
  border-radius: 0 0 10px 10px; /* 下部圓角 */
  transform: translateY(100%); /* 初始位置完全在下方 */
  opacity: 0; /* 初始透明 */
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; /* 平滑動畫效果 */
`;

export const Radios = styled.div``;

export const Radio = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

export const FilterWrapper = styled.div`
  padding: 16px 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
`;

export const Card = styled.div<CardProps>`
  max-width: 300px;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => theme.colors[props.$bg]};
  border-radius: 10px;
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
