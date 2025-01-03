import styled from "styled-components";
import { Container1344 } from "@/styles/container";

type CellProps = {
  $border?: boolean;
  $isEm?: boolean;
  $feature?: boolean;
};

type RowProps = {
  $bg?: boolean;
};

export const Container = styled(Container1344)`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  max-width: 1200px;
  padding: 36px 48px;
  overflow-x: auto;
  @media (max-width: 945px) {
    padding: 0px;
  }
`;

export const ComparisonHeader = styled.h1`
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  font-size: 24px;
  font-weight: 500;
`;

export const GridContainer = styled.div`
  display: grid;
  border: 1px solid #e9e5de;
  border-radius: 10px;
  grid-template-rows: repeat(5, auto);
  grid-auto-flow: row;
  white-space: nowrap;
  min-width: 720px;
`;

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: 90px repeat(4, 1fr);
  align-items: center;
  border-bottom: 1px solid #ddd;
  background-color: ${({ $bg }) => ($bg ? "#F9F8F6" : "white")};

  &:last-child {
    border-bottom: none;
  }
`;

export const Cell = styled.div<CellProps>`
  font-size: ${({ $isEm }) => ($isEm ? "20px" : "18px")};
  font-weight: ${({ $isEm }) => ($isEm ? "700" : "400")};
  padding: ${({ $feature }) => ($feature ? "15px 20px" : "10px 20px")};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-left: ${({ $border }) => ($border ? "1px solid #e9e5de" : "none")};
  &:first-child {
    border-left: none;
  }

  &:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    height: 100%;
    left: 0;
    background-color: white;
    z-index: 2;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`;

export const ComparisonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding: 20px 0px;
  border-left: 1px solid #e9e5de;
`;

export const ComparisonImage = styled.img`
  width: 100%;
  max-width: 200px;
  max-height: 200px;
`;

export const Button = styled.button`
  background-color: #103f99;
  display: flex;
  column-gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
`;

export const Span = styled.span`
  display: flex;
  column-gap: 4px;
  padding: 3px 8px;
  color: #888888;
  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid #888888;
`;

export const RecommendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-top: 36px;

  .slick-slider {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 48px;
    @media (max-width: 1296px) {
      max-width: 1000px;
      padding: 0px 48px;
    }
    @media (max-width: 1096px) {
      max-width: 800px;
      padding: 0px 24px;
    }
    @media (max-width: 900px) {
      max-width: 640px;
      padding: 0px 24px;
    }
    @media (max-width: 740px) {
      max-width: 540px;
      padding: 0px 24px;
    }
    @media (max-width: 640px) {
      max-width: 400px;
      padding: 0px 24px;
    }
    @media (max-width: 500px) {
      max-width: 300px;
      padding: 0px 24px;
    }
  }

  .slick-list {
    padding: 0 48px;
    overflow: hidden;
    margin: 0;
  }

  .slick-track {
    display: flex;
    align-items: center;
    column-gap: 24px;
  }

  .slick-slide {
    height: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .slick-slide img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 2;
  }

  .slick-prev {
    left: -48px;
    &::before {
      content: "";
    }
  }

  .slick-next {
    right: -48px;
    &::before {
      content: "";
    }
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    bottom: -16px;
  }

  .slick-dots li {
    width: 8px;
    height: 8px;
    margin: 0px;
  }
  .slick-dots li button {
    width: 8px;
    height: 8px;
    padding: 0px;
  }

  .slick-dots li button:before {
    width: 8px;
    height: 8px;
    font-size: 8px;
    line-height: 1.5;
    color: #e9e5de;
    opacity: 1;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #103f99;
  }
`;

export const RecommendedHeader = styled.div`
  font-size: 24px;
  padding: 12px 0px;
  font-weight: 500;
  text-align: center;
  color: #08204d;
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #f9f8f6;
`;

export const CarouselImage = styled.div`
  padding: 20px;
`;

export const CarouselInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const CarouselTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #08204d;
`;

export const CarouselPrice = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
