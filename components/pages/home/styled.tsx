import styled from "styled-components";
import { Container1344 } from "@/styles/container";
import { ExtraLarge, Desktop, Tablet, Mobile } from "@/styles/container";
import { bannerImages, homePath } from "@/constants/imagePath";

type CardProps = {
  $isActive: boolean;
};

type BodyBtnProps = {
  $isActive: boolean;
};

export const Container = styled(Container1344)`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  padding-bottom: 80px;

  @media (${ExtraLarge}) {
    row-gap: 160px;
    padding-bottom: 160px;
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  background-image: url(${bannerImages.mobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 680px;

  @media (${Tablet}) {
    background-image: url(${bannerImages.tablet});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 480px;
  }
  @media (${Desktop}) {
    height: 680px;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 10px;
  margin: 0 auto;
  padding: 0px 12px;
  max-width: 1344px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media (${Mobile}) {
    top: 40px;
    row-gap: 24px;
  }
  @media (${Tablet}) {
    position: static;
    padding: 0px 24px;
    row-gap: 32px;
  }
  @media (${ExtraLarge}) {
    padding: 0px;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 34px;
  color: #08204d;
  font-weight: 500;
  @media (min-width: 650px) {
    font-size: 40px;
  }
`;

export const BannerDes = styled.h5`
  font-size: 22px;
  color: #363031;
  font-weight: 500;
  @media (${Desktop}) {
    font-size: 24px;
  }
`;

export const BannerBtn = styled.button`
  max-width: 188px;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 40px;
  background-color: #103f99;
  color: white;
  border-radius: 30px;

  transition: transform 0.3s ease;

  &:hover {
    background-color: #0b2c6b;
    transform: scale(1.1);
  }
`;

export const SolutionContainer = styled.div`
  row-gap: 30px;
  display: flex;
  flex-direction: column;
`;

export const SolutionHeader = styled.h2`
  color: #18181b;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0px;
  @media (${ExtraLarge}) {
    flex-direction: row;
    align-items: normal;
    padding: 20px 0px;
  }
`;

export const Card = styled.div<CardProps>`
  position: relative;
  background-color: #9f9f9e;
  width: 100%;
  max-height: ${({ $isActive }) => ($isActive ? "300px" : "200px")};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out,
    background-color 0.3s ease-in-out,
    border-radius 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: ${({ $isActive }) => ($isActive ? "translateY(-10px)" : "none")};
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    background-color: ${({ $isActive }) => ($isActive ? "#7f7f7e" : "#9f9f9e")};
    border-radius: ${({ $isActive }) => ($isActive ? "25px" : "20px")};
  }

  @media (${ExtraLarge}) {
    max-width: ${({ $isActive }) => ($isActive ? "496px" : "192px")};
    max-height: 434px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
`;

export const CardTitle = styled.h5`
  font-size: 24px;
  font-weight: 500;
  color: white;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const CardDes = styled.p<CardProps>`
  font-size: 18px;
  font-weight: 400;
  color: white;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
  display: ${({ $isActive }) => ($isActive ? "block" : "none")};
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
`;

export const StepsHeader = styled.h2`
  color: #18181b;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const StepsSpan = styled.span`
  color: #52525b;
  font-weight: 700;
  font-size: 18px;
  color: 700;
`;

export const StepsMain = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 0px;
  @media (${Tablet}) {
    flex-direction: row;
    column-gap: 24px;
    padding: 20px 24px;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  @media (${Tablet}) {
    max-width: 240px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StepTitle = styled.h6`
  font-size: 20px;
  font-weight: 700;
  color: #08204d;
`;

export const StepDes = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

export const StepsIcon = styled.div`
  border-radius: 50%;
  background-color: #e7ecf5;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 20px;
  background-color: #f9f8f6;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (${ExtraLarge}) {
    padding: 50px;
  }
`;

export const BodyHeader = styled.h3`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  @media (${Tablet}) {
    text-align: left;
  }
`;

export const BodyPrompt = styled.p`
  color: #08204d;
  font-size: 16px;
  font-weight: 500;
  @media (${Tablet}) {
    font-size: 30px;
  }
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  @media (${Tablet}) {
    flex-direction: row;
    padding: 0px 25px;
  }
  @media (${Desktop}) {
    padding: 0px 50px;
  }
  @media (${ExtraLarge}) {
    padding: 0px 100px;
  }
`;

export const BodyTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  max-width: 600px;
  height: 100%;
  max-height: 590px;
  @media (${Tablet}) {
    flex-direction: row;
    column-gap: 20px;
  }
  @media (${Desktop}) {
    width: 100%;
  }
`;

export const BodyBtnsLeft = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  row-gap: 40px;
  @media (${Tablet}) {
    flex-direction: column;
  }
`;

export const BodyBtnsRight = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  row-gap: 40px;
  @media (${Tablet}) {
    flex-direction: column;
  }
`;

export const BodyBtn = styled.button<BodyBtnProps>`
  padding: 4px 8px;
  border: 2px solid #103f99;
  font-size: 16px;
  font-weight: 700;
  border-radius: 30px;
  color: #103f99;
  position: relative;
  background-color: ${({ $isActive }) =>
    $isActive ? "#103f99" : "transparent"};
  color: ${({ $isActive }) => ($isActive ? "white" : "#103f99")};
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #0b2c6b;
    color: white;
  }

  @media (${Mobile}) {
    padding: 8px 16px;
  }
`;

export const BodyImg = styled.img`
  width: 100%;
  height: 100%;
  display: none;
  @media (${Tablet}) {
    max-width: 200px;
    display: block;
  }
  @media (${Desktop}) {
    max-width: 318px;
  }
`;

export const TypeTabs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 22px;
`;

export const TypeTab = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #103f99;
  display: flex;
  padding: 20px;
  column-gap: 20px;
  background-color: #e7ecf5;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #103f99;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: -5px;
    bottom: -5px;
    border-bottom: 2px solid #103f99;
    border-right: 2px solid #103f99;
    border-radius: 10px;
  }
`;

export const TypeImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const TypeIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CooperationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const CooperationHeader = styled.h2`
  color: #08204d;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 12px;
`;

export const CooperationSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`;

export const CooperationMain = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
`;

export const CooperationImg = styled.div`
  padding: 20px 0px;
`;

export const Brand = styled.div`
  max-width: 50px;
  max-height: 50px;
  @media (${Tablet}) {
    max-width: 100px;
    max-height: 100px;
  }
`;

export const BrandLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export const GuideContainer = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 70px;
  height: 410px;
  background-image: url(${homePath}/guide-bg.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const GuideHeader = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #08204d;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const GuideSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`;

export const GuideBtn = styled.button`
  color: black;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 40px;
  border-radius: 30px;
  background-color: #ffcc1a;
  max-width: 188px;
  &:hover {
    background-color: #b28f12;
    color: white;
  }
`;
