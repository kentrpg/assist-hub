import styled from "styled-components";
import { Container1344 } from "@/styles/container";
import { ExtraLarge, Desktop, Tablet, Mobile } from "@/styles/container";
import exp from "constants";

type CardProps = {
  $isActive: boolean;
};

export const Container = styled(Container1344)`
  display: flex;
  flex-direction: column;
  row-gap: 160px;
  padding-bottom: 80px;
`;

export const Banner = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 680px;
  background-image: url("/images/banner.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerContent = styled.div`
  margin: 0 auto;
  padding: 0px 24px;
  padding-top: 188px;
  max-width: 1344px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  @media (${ExtraLarge}) {
    padding: 0px;
    padding-top: 188px;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 40px;
  color: #08204d;
  font-weight: 500;
`;

export const BannerDes = styled.h5`
  font-size: 24px;
  color: #363031;
  font-weight: 500;
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
  gap: 20px;
  padding: 20px 0px;
`;

export const Card = styled.div<CardProps>`
  position: relative;
  background-color: #9f9f9e;
  max-width: ${({ $isActive }) => ($isActive ? "496px" : "192px")};
  max-height: 434px;
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
    transform: ${({ $isActive }) =>
      $isActive ? "translateY(-10px) scale(1.05)" : "none"};
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    background-color: ${({ $isActive }) => ($isActive ? "#7f7f7e" : "#9f9f9e")};
    border-radius: ${({ $isActive }) => ($isActive ? "25px" : "20px")};
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
  column-gap: 24px;
  padding: 20px 24px;
`;

export const Step = styled.div`
  max-width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
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

export const StepsBtn = styled.button`
  padding: 10px 40px;
  font-size: 18px;
  font-weight: 500;
  background-color: #103f99;
  color: white;
  border-radius: 30px;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #0b2c6b;
    transform: scale(1.1);
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 50px;
  background-color: #f9f8f6;
  border-radius: 20px;
`;

export const BodyHeader = styled.h3`
  font-size: 32px;
  font-weight: 500;
`;

export const BodyContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
`;

export const BodyTabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 100%;
  height: 100%;
  max-height: 590px;
`;

export const BodyBtns = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const BodyBtn = styled.button`
  padding: 8px 16px;
  border: 2px solid #103f99;
  font-size: 16px;
  font-weight: 700;
  border-radius: 30px;
  color: #103f99;
`;

export const BodyImg = styled.img`
  max-width: 318px;
  width: 100%;
  height: 100%;
`;

export const TypeTabs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 22px;
`;

export const TypeTab = styled.div`
  display: flex;
  padding: 20px;
  column-gap: 20px;
  background-color: #e7ecf5;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #103f99;
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
  max-width: 100px;
  max-height: 100px;
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
  background-image: url("/images/guide-bg.webp");
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
