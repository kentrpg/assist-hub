import styled from "styled-components";
import {
  Container1344,
  ExtraLarge,
  Desktop,
  Tablet,
  Mobile,
} from "@/styles/container";

type TabProps = {
  $isSelected?: boolean;
};

export const NoProductsMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: #888888;
`;

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
  width: 100%;
  height: 88px;
  overflow: hidden;

  ${({ $isSelected }) =>
    $isSelected &&
    `
    border: 1px solid #000000;
    justify-content: start;
  `}

  img {
    transition: all 0.3s ease;

    ${({ $isSelected }) =>
      $isSelected &&
      `
      width: 33px;
      height: 33px;
    `}
  }

  div:first-child {
    transition: height 0.3s ease;

    ${({ $isSelected }) =>
      $isSelected &&
      `
      height: 56px;
    `}
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

  @media (${Desktop}) {
    &:hover {
      justify-content: start;
      cursor: pointer;
    }

    &:hover img {
      width: 33px;
      height: 33px;
    }

    &:hover div:first-child {
      height: 56px;
    }

    &:hover div:last-child {
      transform: translateY(0);
      opacity: 1;
      height: 32px;
    }
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
  cursor: pointer;
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
  transform: translateY(100%);
  opacity: 0;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
`;

export const Radios = styled.div`
  outline: solid 1px #e9e5de;
`;

export const Radio = styled.div`
  cursor: pointer;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  column-gap: 6px;
  border-bottom: solid 1px #e9e5de;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const RadioIcon = styled.div`
  display: flex;
  cursor: pointer;
`;

export const RadioText = styled.div`
  display: flex;
  cursor: pointer;
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
