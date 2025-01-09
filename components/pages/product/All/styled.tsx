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
  padding: 0px 12px;
  max-width: 366px;
  width: 100%;
`;

export const Type = styled.div`
  padding: 16px 0px;
  font-size: 16px;
  font-weight: 500;
  color: #08204d;
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  outline: #e9e5de 1px solid;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  max-width: 167px;
  width: 100%;
`;

export const FilteredResults = styled.div`
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

export const Img = styled.img`
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
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const Crutch = styled.div`
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const Bed = styled.div`
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const Oxygen = styled.div`
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
