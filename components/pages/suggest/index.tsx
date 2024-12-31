import { Container1116 as Container } from "@/styles/container";
import {
  Header,
  Title,
  SubTitle,
  Assistive,
  FooterTitle,
  RecommendationList,
  Card,
  ImageWrapper,
  Image,
  Info,
  Name,
  Description,
  FeatureList,
  RecommendDescription,
  Reasons,
  RentButton,
  Reason,
} from "./styled";

import { PageBackButton } from "@/components/ui/circulars";
import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import InquiryDetail from "@/components/ui/Detail";
import { suggestInfoMapping } from "@/components/ui/Detail/data";
import { suggestInfo, assistiveRecommendations } from "./data";
import { FeatureBadge, PriceBadge } from "@/components/ui/badges";
import { SuggestCheck } from "@/utils/react-icons/CheckIcon";
import { FlexAlignCenter } from "@/styles/flex";

const Suggest = () => {
  return (
    <Container>
      <Header>
        <PageBackButton>
          <MdArrowBack size={20} />
        </PageBackButton>
        <Title>建議單</Title>
      </Header>
      <InquiryDetail data={suggestInfo} mapping={suggestInfoMapping} />
      <Assistive>
        <SubTitle>店家推薦輔具</SubTitle>
        <RecommendationList>
          {assistiveRecommendations.map(
            ({ id, name, description, price, imgSrc, features, reasons }) => (
              <Card key={id}>
                <ImageWrapper>
                  <Image src={`/images/${imgSrc}`} alt={name} />
                  <PriceBadge>{price}</PriceBadge>
                </ImageWrapper>
                <Info>
                  <Name>{name}</Name>
                  <Description>{description}</Description>
                  <FeatureList>
                    {features.map((feature, index) => (
                      <FeatureBadge key={index}>
                        <SuggestCheck size={24} />
                        {feature}
                      </FeatureBadge>
                    ))}
                  </FeatureList>
                </Info>
                <RecommendDescription>
                  <Name>推薦原因</Name>
                  <Reasons>
                    {reasons.map((reason, index) => (
                      <Reason key={index}>{reason}</Reason>
                    ))}
                  </Reasons>
                  <FlexAlignCenter>
                    <RentButton>
                      <MdShoppingCart size={24} />
                      立即租賃
                    </RentButton>
                  </FlexAlignCenter>
                </RecommendDescription>
              </Card>
            )
          )}
        </RecommendationList>
      </Assistive>
      <FooterTitle>若有其他進一步關於輔具問題，請來電告知。</FooterTitle>
    </Container>
  );
};

export default Suggest;
