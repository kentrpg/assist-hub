import React, { useState, useRef } from "react"; // 引入 useRef
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
  BodyBtnsRight,
  BodyBtnsLeft,
  BodyPrompt,
  BannerImage,
} from "./styled";
import {
  steps,
  bodyPartsLeft,
  bodyPartsRight,
  categories,
  BodyPartId,
} from "./data";
import { brands, layoutPath } from "@/constants/imagePath";
import { homeSolutions } from "@/constants/statusPageContent";

const Home: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeTab, setActiveTab] = useState<BodyPartId | null>(null);

  // 1. 創建 ref
  const bodyContainerRef = useRef<HTMLDivElement | null>(null);

  // 2. 滾動至 BodyContainer
  const scrollToBodyContainer = () => {
    if (bodyContainerRef.current) {
      bodyContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Banner>
        <BannerContent>
          <BannerTitle>
            線上輔具租賃，
            <br /> 一鍵解決您的行動需求
          </BannerTitle>
          <BannerDes>提供最適合的輔具，讓您或家人生活更輕鬆</BannerDes>
          {/* 3. 讓按鈕點擊觸發滾動 */}
          <BannerBtn onClick={scrollToBodyContainer}>免費快速適配</BannerBtn>
        </BannerContent>
      </Banner>
      <SolutionContainer>
        <SolutionHeader>根據不同需求，找到最適合的解決方案</SolutionHeader>
        <Cards>
          {homeSolutions.map((solution, index) => (
            <Card
              key={solution.id}
              $isActive={activeCard === index}
              onClick={() => setActiveCard(index)}
            >
              <CardImg {...solution.imageProps} />
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
      </StepsContainer>
      {/* 4. 設定 ref */}
      <BodyContainer ref={bodyContainerRef}>
        <BodyHeader>點選受傷部位，快速適配輔具</BodyHeader>
        <BodyContent>
          {/* 左側選擇按鈕 */}
          <BodyTabs>
            <BodyBtnsLeft>
              {bodyPartsLeft.map((part) => (
                <BodyBtn
                  $isActive={activeTab === part.id}
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
            </BodyBtnsLeft>
            <BodyImg src={`${layoutPath}/body.webp`} alt="body" />
            <BodyBtnsRight>
              {bodyPartsRight.map((part) => (
                <BodyBtn
                  $isActive={activeTab === part.id}
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
            </BodyBtnsRight>
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
            {!activeTab && <BodyPrompt>請選擇受傷部位</BodyPrompt>}
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
              <BrandLogo {...brand} />
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
        <Link href="/product" passHref>
          <GuideBtn>探索所有輔具</GuideBtn>
        </Link>
      </GuideContainer>
    </Container>
  );
};

export default Home;
