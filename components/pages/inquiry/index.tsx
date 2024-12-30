import {
  Header,
  Title,
  SubTitle,
  InfoContainer,
  InfoRow,
  InfoCol,
  InfoLabel,
  InfoValue,
  Assistive,
  CardGroup,
  InfoWrapper,
} from "./styled";
import { Container1116 as Container } from "@/styles/container";
import { FlexAlignCenter } from "@/styles/flex";
import { MdArrowBack, MdOutlineShare } from "react-icons/md";
import { PageBackButton } from "@/components/ui/circulars";
import { PrimaryIconButton } from "@/components/ui/buttons";

import { inquiryCardColors, inquiryCards } from "./data";
import InquiryCard from "@/components/ui/cards/InquiryCard";

const Inquiry = () => {
  return (
    <Container>
      <Header>
        <PageBackButton>
          <MdArrowBack size={20} />
        </PageBackButton>
        <Title>詢問單</Title>
      </Header>
      <InfoWrapper>
        <InfoContainer>
          <InfoRow>
            <InfoCol>
              <InfoLabel>單號</InfoLabel>
              <InfoValue>AKC833</InfoValue>
            </InfoCol>
            <InfoCol>
              <InfoLabel>建立日期</InfoLabel>
              <InfoValue>2024/10/04</InfoValue>
            </InfoCol>
          </InfoRow>
          <InfoRow>
            <InfoCol>
              <InfoLabel>行動評估</InfoLabel>
              <InfoValue>具平地跑跳能力</InfoValue>
            </InfoCol>
            <InfoCol>
              <InfoLabel>補充說明</InfoLabel>
              <InfoValue>
                騎機車不慎摔傷，有撞到腳踝，有時候走路會痛。
              </InfoValue>
            </InfoCol>
          </InfoRow>
        </InfoContainer>
      </InfoWrapper>
      <Assistive>
        <SubTitle>您選擇的詢問輔具</SubTitle>
        <CardGroup>
          {inquiryCards.map(
            ({ id, name, description, price, imgSrc, features }, index) => (
              <InquiryCard
                id={id}
                color={inquiryCardColors[index]}
                price={price}
                imgSrc={`/images/${imgSrc}`}
                name={name}
                description={description}
                features={features}
              ></InquiryCard>
            )
          )}
        </CardGroup>
      </Assistive>
      <FlexAlignCenter>
        <PrimaryIconButton>
          <MdOutlineShare size={27} />
          分享詢問單
        </PrimaryIconButton>
      </FlexAlignCenter>
    </Container>
  );
};

export default Inquiry;
