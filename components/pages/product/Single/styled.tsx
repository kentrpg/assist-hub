import styled, { css } from "styled-components";
import {
  Container1344,
  ExtraLarge,
  Desktop,
  Tablet,
  Mobile,
} from "@/styles/container";
// import { c } from "@/styles/theme";

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

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  row-gap: 24px;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    column-gap: 60px;
  }
  @media (${ExtraLarge}) {
    column-gap: 114px;
  }
`;

export const InfoImages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 15px;
`;

export const ImageWrapper = styled.div`
  background-color: #f9f8f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media (${Mobile}) {
    padding: 40px;
  }
  @media (${ExtraLarge}) {
    padding: 114px;
  }
`;

export const InfoImage = styled.img`
  max-width: 456px;
  max-height: 456px;
  width: 100%;
  object-fit: cover;
`;

export const Thumbnail = styled.div`
  display: flex;
  column-gap: 12px;
  img {
    width: 50px;
    height: 50px;
    @media (${Mobile}) {
      width: 78px;
      height: 78px;
    }
  }
`;

export const Detail = styled.div`
  padding: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  @media (min-width: 800px) {
    max-width: 546px;
    padding: 24px;
  }
`;

export const Title = styled.h3`
  color: #08204d;
  font-size: 32px;
  font-weight: 500;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const RentBtn = styled.button`
  padding: 10px 0px;
  width: 100%;
  color: #ffffff;
  border-radius: 30px;
  background-color: #103f99;
`;

export const InquiryIcon = styled.div`
  background-image: "/images/accessible.png";
`;

export const InquiryBtn = styled.button``;

export const ComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  padding: 36px 48px;
  overflow-x: auto;
  @media (max-width: 945px) {
    padding: 0px;
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
  padding: 36px 0px;

  .slick-slider {
    max-width: 1344px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    justify-content: center;
    align-items: center;
    padding: 0px 48px;
    @media (max-width: 1440px) {
      max-width: 1200px;
      padding: 0px 48px;
    }
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
      max-width: 460px;
      padding: 0px 24px;
    }
    @media (max-width: 560px) {
      max-width: 340px;
      padding: 0px 24px;
    }
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
    height: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
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
`;

export const CarouselImg = styled.div`
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
