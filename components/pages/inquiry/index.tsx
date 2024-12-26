import {
  Header,
  BackButton,
  Title,
  SubTitle,
  InfoWrapper,
  InfoRow,
  InfoCol,
  InfoLabel,
  InfoValue,
  InquiryActions,
  ShareButton,
  Assistive,
  AssistiveWrapper,
  AssistiveDeviceCard,
} from "./styled";
import { Container1116 as Container } from "@/styles/container";
import { MdArrowBack, MdOutlineShare } from "react-icons/md";

const InquiryPage = () => {
  return (
    <Container>
      <Header>
        <BackButton>
          <MdArrowBack size={20} />
        </BackButton>
        <Title>詢問單</Title>
      </Header>

      <InfoWrapper>
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
            <InfoValue>騎機車不慎摔傷，有撞到腳踝，有時候走路會痛。</InfoValue>
          </InfoCol>
        </InfoRow>
      </InfoWrapper>
      <Assistive>
        <SubTitle>您選擇的詢問輔具</SubTitle>
        <AssistiveWrapper>
          <AssistiveDeviceCard> </AssistiveDeviceCard>
          <AssistiveDeviceCard> </AssistiveDeviceCard>
          <AssistiveDeviceCard> </AssistiveDeviceCard>
        </AssistiveWrapper>
      </Assistive>
      <InquiryActions>
        <ShareButton>
          <MdOutlineShare size={28} />
          分享詢問單
        </ShareButton>
      </InquiryActions>
    </Container>
  );
};

export default InquiryPage;
