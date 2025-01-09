import styled, { css } from "styled-components";
import {
  Container1344,
  ExtraLarge,
  Desktop,
  Tablet,
  Mobile,
} from "@/styles/container";

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
  row-gap: 60px;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  row-gap: 24px;
  justify-content: center;
  flex-direction: column;

  @media (${Tablet}) {
    flex-direction: row;
    column-gap: 40px;
  }
  @media (${ExtraLarge}) {
    column-gap: 90px;
  }
`;

export const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 0px;
  @media (${Tablet}) {
    max-width: 570px;
  }
`;

export const Title = styled.h3`
  color: #08204d;
  font-size: 32px;
  font-weight: 500;
`;

export const SubTitle = styled.h6`
  color: #08204d;
  font-size: 20px;
  font-weight: 700;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const PriceField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const Deposit = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const DesWord = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const InfoField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const BtnField = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;
  padding-bottom: 0px;
  column-gap: 24px;
  font-size: 18px;
  font-weight: 500;
  row-gap: 8px;

  @media (${Tablet}) {
    flex-direction: row;
    column-gap: 24px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const RentBtn = styled.button`
  max-width: 100%;
  width: 100%;
  transition: none;
  padding: 10px 0px;
  color: #ffffff;
  border-radius: 30px;
  background-color: #103f99;
  transition: none;
`;

export const InquiryIcon = styled.div`
  background-image: url("/images/accessible.png");
  background-size: contain;
  background-repeat: no-repeat;
  display: none;
  @media (${Tablet}) {
    display: block;
    width: 27px;
    height: 27px;
  }
`;

export const InquiryBtn = styled.button`
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  white-space: nowrap;
  width: 100%;
  padding: 10px 20px;
  border-radius: 30px;
  background-color: white;
  border: 1px solid #ffcc1a;
  position: relative;
  transition: none;
  color: black;
  text-shadow: none;

  &:hover {
    max-width: 100%;
    width: 100%;
    color: black;
    span {
      display: inline-block;
    }
  }

  @media (${Tablet}) {
    background-color: #ffcc1a;
    max-width: 67px;
    width: 100%;
    color: transparent;
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: color 0.5s ease, max-width 0.5s ease;
    span {
      display: none;
    }
    &:hover {
      max-width: 407px;
      width: 100%;
    }
  }
`;

export const ComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  padding: 0px;
  overflow-x: auto;
  @media (min-width: 945px) {
    padding: 36px 48px;
  }
`;

export const ComparisonHeader = styled.h5`
  position: sticky;
  color: #08204d;
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

export const ComparisonImg = styled.img`
  width: 100%;
  max-width: 100px;
  max-height: 100px;

  @media (${Tablet}) {
    max-width: 200px;
    max-height: 200px;
  }
`;

export const ComparisonBtn = styled.button`
  background-color: #103f99;
  display: flex;
  column-gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
`;

export const RecommendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  max-width: 100%;
  padding: 0px;
  @media (${ExtraLarge}) {
    padding: 0px 48px 36px 48px;
  }

  .slick-slider {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    justify-content: center;
    align-items: center;
  }

  .slick-list {
    width: 100%;
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
    max-width: 300px;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-slide img {
    display: block;
    max-width: 100%;
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 2;
  }

  .slick-prev {
    left: -90px;
    &::before {
      content: "";
    }
  }

  .slick-next {
    right: -90px;
    &::before {
      content: "";
    }
  }

  .slick-dots {
    position: static;
    display: flex !important;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    bottom: -16px;
    padding: 16px 0px;
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

export const RecommendedHeader = styled.h5`
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
  padding: 20px;
`;

export const CarouselImg = styled.div``;

export const CarouselInfo = styled.div`
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
