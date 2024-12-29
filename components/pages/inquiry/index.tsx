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
  Card,
  Image,
  Price,
  Description,
  Name,
  Features,
  Feature,
  FeatureGroup,
  PriceUnit,
  DetailsWrapper,
  FeatureTitle,
  CardContent,
  Details,
  InfoWrapper,
  ImageWrapper,
  FlexFullHeight,
} from "./styled";
import { Container1116 as Container } from "@/styles/container";
import { CheckIcon } from "@/utils/react-icons/CheckIcon";
import { FlexAlignCenter } from "@/styles/flex";
import { MdArrowBack, MdOutlineShare } from "react-icons/md";
import { PageBackButton } from "@/components/ui/circulars";
import { PrimaryIconButton } from "@/components/ui/buttons";

const InquiryPage = () => {
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
          <Card>
            <FlexFullHeight>
              <CardContent>
                <DetailsWrapper>
                  <Details>
                    <Name>電動輪椅</Name>
                    <Description>輕量化鋁合金金屬設計</Description>
                  </Details>
                  <Price>
                    2,000元
                    <PriceUnit>/月</PriceUnit>
                  </Price>
                </DetailsWrapper>
                <ImageWrapper>
                  <Image src="/images/device1.png" alt="電動輪椅" />
                </ImageWrapper>
              </CardContent>
              <Features>
                <FeatureTitle>輔具特色</FeatureTitle>
                <FeatureGroup>
                  <Feature>
                    {/* <MdCheck size={24} /> */}
                    {/* // TBD: react-icons 在 styled 內設置 width、height、color 做法可以嗎 */}
                    <CheckIcon />
                    支撐性高
                  </Feature>
                  <Feature>
                    <CheckIcon />
                    輕量化設計
                  </Feature>
                  <Feature>
                    <CheckIcon />
                    S曲面型坐墊
                  </Feature>
                </FeatureGroup>
              </Features>
            </FlexFullHeight>
          </Card>
          <Card>
            <FlexFullHeight>
              <CardContent>
                <DetailsWrapper>
                  <Details>
                    <Name>腋下拐</Name>
                    <Description>輕量化鋁合金金屬設計</Description>
                  </Details>
                  <Price>
                    1,000元
                    <PriceUnit>/月</PriceUnit>
                  </Price>
                </DetailsWrapper>
                <ImageWrapper>
                  <Image src="/images/device2.png" alt="電動輪椅" />
                </ImageWrapper>
              </CardContent>
              <Features>
                <FeatureTitle>輔具特色</FeatureTitle>
                <FeatureGroup>
                  <Feature>
                    <CheckIcon />
                    支撐性高
                  </Feature>
                  <Feature>
                    <CheckIcon />
                    輕量化設計
                  </Feature>
                  <Feature>
                    <CheckIcon />
                    可調節適合高度
                  </Feature>
                </FeatureGroup>
              </Features>
            </FlexFullHeight>
          </Card>
          <Card>
            <FlexFullHeight>
              <CardContent>
                <DetailsWrapper>
                  <Details>
                    <Name>電動輪椅</Name>
                    <Description>輕量化鋁合金金屬設計</Description>
                  </Details>
                  <Price>
                    2,000元
                    <PriceUnit>/月</PriceUnit>
                  </Price>
                </DetailsWrapper>
                <ImageWrapper>
                  <Image src="/images/device3.png" alt="電動輪椅" />
                </ImageWrapper>
              </CardContent>
              <Features>
                <FeatureTitle>輔具特色</FeatureTitle>
                <FeatureGroup>
                  <Feature>
                    <CheckIcon />
                    支撐性高
                  </Feature>
                  <Feature>
                    <CheckIcon />
                    輕量化設計
                  </Feature>
                  <Feature>
                    <CheckIcon />
                    S曲面型坐墊
                  </Feature>
                </FeatureGroup>
              </Features>
            </FlexFullHeight>
          </Card>
        </CardGroup>
      </Assistive>
      <FlexAlignCenter>
        <PrimaryIconButton>
          <MdOutlineShare size={28} />
          分享詢問單
        </PrimaryIconButton>
      </FlexAlignCenter>
    </Container>
  );
};

export default InquiryPage;
