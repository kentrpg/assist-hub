import {
  Header,
  Title,
  SubTitle,
  InfoContainer,
  InfoRow,
  InfoCol,
  InfoLabel,
  InfoValue,
  InquiryActions,
  ShareButton,
  Assistive,
  AssistiveWrapper,
  AssistiveDeviceCard,
  DeviceImage,
  Price,
  DeviceSubtitle,
  DeviceTitle,
  Feature,
  FeatureItem,
  FeatureList,
  PriceUnit,
  DeviceInfo,
  FeatureTitle,
  Info,
  TextWrapper,
  InfoWrapper,
  ImageWrapper,
} from "./styled";
import { MdOutlineShare } from "react-icons/md";
import { Container1116 as Container } from "@/styles/container";
import { CheckIcon } from "@/utils/react-icons/CheckIcon";
import PageBackButton from "@/components/ui/buttons/PageBackButton";

const InquiryPage = () => {
  return (
    <Container>
      <Header>
        <PageBackButton />
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
        <AssistiveWrapper>
          <AssistiveDeviceCard>
            <Info>
              <DeviceInfo>
                <TextWrapper>
                  <DeviceTitle>電動輪椅</DeviceTitle>
                  <DeviceSubtitle>輕量化鋁合金金屬設計</DeviceSubtitle>
                </TextWrapper>
                <Price>
                  2,000元
                  <PriceUnit>/月</PriceUnit>
                </Price>
              </DeviceInfo>
              <ImageWrapper>
                <DeviceImage src="/images/device1.png" alt="電動輪椅" />
              </ImageWrapper>
            </Info>
            <Feature>
              <FeatureTitle>輔具特色</FeatureTitle>
              <FeatureList>
                <FeatureItem>
                  {/* <MdCheck size={24} /> */}
                  {/* // TBD: react-icons 在 styled 內設置 width、height、color 做法可以嗎 */}
                  <CheckIcon />
                  支撐性高
                </FeatureItem>
                <FeatureItem>
                  <CheckIcon />
                  輕量化設計
                </FeatureItem>
                <FeatureItem>
                  <CheckIcon />
                  S曲面型坐墊
                </FeatureItem>
              </FeatureList>
            </Feature>
          </AssistiveDeviceCard>
          <AssistiveDeviceCard>
            <Info>
              <DeviceInfo>
                <TextWrapper>
                  <DeviceTitle>腋下拐</DeviceTitle>
                  <DeviceSubtitle>輕量化鋁合金金屬設計</DeviceSubtitle>
                </TextWrapper>
                <Price>
                  1,000元
                  <PriceUnit>/月</PriceUnit>
                </Price>
              </DeviceInfo>
              <ImageWrapper>
                <DeviceImage src="/images/device2.png" alt="電動輪椅" />
              </ImageWrapper>
            </Info>
            <Feature>
              <FeatureTitle>輔具特色</FeatureTitle>
              <FeatureList>
                <FeatureItem>
                  <CheckIcon />
                  支撐性高
                </FeatureItem>
                <FeatureItem>
                  <CheckIcon />
                  輕量化設計
                </FeatureItem>
                <FeatureItem>
                  <CheckIcon />
                  可調節適合高度
                </FeatureItem>
              </FeatureList>
            </Feature>
          </AssistiveDeviceCard>
          <AssistiveDeviceCard>
            <Info>
              <DeviceInfo>
                <TextWrapper>
                  <DeviceTitle>電動輪椅</DeviceTitle>
                  <DeviceSubtitle>輕量化鋁合金金屬設計</DeviceSubtitle>
                </TextWrapper>
                <Price>
                  2,000元
                  <PriceUnit>/月</PriceUnit>
                </Price>
              </DeviceInfo>
              <ImageWrapper>
                <DeviceImage src="/images/device3.png" alt="電動輪椅" />
              </ImageWrapper>
            </Info>
            <Feature>
              <FeatureTitle>輔具特色</FeatureTitle>
              <FeatureList>
                <FeatureItem>
                  <CheckIcon />
                  支撐性高
                </FeatureItem>
                <FeatureItem>
                  <CheckIcon />
                  輕量化設計
                </FeatureItem>
                <FeatureItem>
                  <CheckIcon />
                  S曲面型坐墊
                </FeatureItem>
              </FeatureList>
            </Feature>
          </AssistiveDeviceCard>
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
