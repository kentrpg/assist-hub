import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import {
  Container,
  Banner,
  BannerContent,
  BannerTitle,
  BannerDes,
  BannerBtn,
  SolutionContainer,
  Cards,
  Card,
  SolutionHeader,
  CardTitle,
  CardDes,
  CardImg,
  CardContent,
  StepsContainer,
  StepsHeader,
  StepsSpan,
  StepsMain,
  Step,
  StepContent,
  StepTitle,
  StepDes,
  StepsIcon,
  StepsBtn,
  CooperationContainer,
  CooperationHeader,
  CooperationSpan,
  CooperationMain,
  Brand,
  BrandLogo,
  GuideContainer,
  GuideHeader,
  GuideSpan,
  GuideBtn,
  BodyContainer,
  BodyHeader,
  BodyContent,
  BodyTabs,
  TypeTabs,
  BodyImg,
  TypeIcon,
  TypeTab,
  TypeImg,
  BodyBtn,
  BodyBtns,
} from "./styled";
import {
  solutions,
  steps,
  brands,
  bodyParts,
  categories,
  BodyPartId,
} from "./data";

const Home: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeTab, setActiveTab] = useState<BodyPartId | null>(null); 

  return (
    <Container>
      <Banner>
        <BannerContent>
          <BannerTitle>
            線上輔具租賃，
            <br /> 一鍵解決您的行動需求
          </BannerTitle>
          <BannerDes>提供最適合的輔具，讓您或家人生活更輕鬆</BannerDes>
          <BannerBtn>免費快速適配</BannerBtn>
        </BannerContent>
      </Banner>
      <SolutionContainer>
        <SolutionHeader>根據不同需求，找到最適合的解決方案</SolutionHeader>
        <Cards>
          {solutions.map((solution, index) => (
            <Card
              key={index}
              $isActive={activeCard === index}
              onClick={() => setActiveCard(index)}
            >
              <CardImg src={solution.imgSrc} alt={solution.imgAlt} />
              <CardContent>
                <CardTitle>{solution.title}</CardTitle>
                {activeCard === index && (
                  <CardDes $isActive={activeCard === index}>
                    {solution.description}
                  </CardDes>
                )}
              </CardContent>
            </Card>
          ))}
        </Cards>
      </SolutionContainer>
      <StepsContainer>
        <StepsHeader>
          租賃輔具其實很簡單
          <StepsSpan>5個步驟，解決您的需求</StepsSpan>
        </StepsHeader>
        <StepsMain>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepsIcon>{step.icon}</StepsIcon>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDes>{step.description}</StepDes>
              </StepContent>
            </Step>
          ))}
        </StepsMain>
        <StepsBtn>預約租賃</StepsBtn>
      </StepsContainer>
      <BodyContainer>
        <BodyHeader>點選受傷部位，快速適配輔具</BodyHeader>
        <BodyContent>
          {/* 左側選擇按鈕 */}
          <BodyTabs>
            <BodyBtns>
              {bodyParts.map((part) => (
                <BodyBtn
                  key={part.id}
                  onClick={() =>
                    setActiveTab((prevTab) =>
                      prevTab === part.id ? null : part.id,
                    )
                  }
                >
                  {part.name}
                </BodyBtn>
              ))}
            </BodyBtns>
            <BodyImg src="/images/body.webp" alt="body" />
          </BodyTabs>
          {/* 右側顯示分類 */}
          <TypeTabs>
            {activeTab &&
              categories[activeTab].map((category, index) => (
                <Link
                  key={index}
                  href={`/product?type=${category.type}`}
                  passHref
                >
                  <TypeTab>
                    <TypeImg src={category.imgSrc} alt={category.name} />
                    {category.name}
                    <TypeIcon>
                      <MdArrowForward size={20} color="#103F99" />
                    </TypeIcon>
                  </TypeTab>
                </Link>
              ))}
            {!activeTab && <p>請選擇左側的受傷部位</p>}
          </TypeTabs>
        </BodyContent>
      </BodyContainer>
      <CooperationContainer>
        <CooperationHeader>
          我們的合作品牌
          <CooperationSpan>
            我們與全球知名的輔具廠商合作，提供可靠、優質的產品選擇。
          </CooperationSpan>
        </CooperationHeader>
        <CooperationMain>
          {brands.map((brand, index) => (
            <Brand key={index}>
              <BrandLogo src={brand.imgSrc} alt={brand.imgAlt} />
            </Brand>
          ))}
        </CooperationMain>
      </CooperationContainer>
      <GuideContainer>
        <GuideHeader>
          開始您的輔具租賃之旅
          <GuideSpan>
            不論是臨時需求還是日常輔助，我們都能提供最貼心的服務。
          </GuideSpan>
        </GuideHeader>
        <GuideBtn>探索所有輔具</GuideBtn>
      </GuideContainer>
    </Container>
  );
};

export default Home;
