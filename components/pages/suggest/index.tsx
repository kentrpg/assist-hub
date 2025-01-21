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
  RentButton,
  Reason,
} from "./styled";
import { PageBackButton } from "@/components/ui/circulars";
import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import InquiryDetail from "@/components/pages/inquiry/Summary";
import { FeatureBadge, PriceBadge } from "@/components/ui/badges";
import { SuggestCheck } from "@/utils/react-icons/CheckIcon";
import { formatCurrency } from "@/helpers/format/currency";
import { SuggestPageProps } from "@/types/getSuggest";

const Suggest = ({
  suggestId,
  suggestCode: inquiryCode,
  createdStamp,
  level,
  additionalInfo,
  products,
}: SuggestPageProps) => {
  console.log("suggest data", {
    suggestId,
    inquiryCode,
    createdStamp,
    level,
    additionalInfo,
    products,
  });

  return (
    <Container>
      <Header>
        <PageBackButton>
          <MdArrowBack size={20} />
        </PageBackButton>
        <Title>建議單</Title>
      </Header>
      <InquiryDetail
        data={{ inquiryCode, createdStamp, level, additionalInfo }}
      />
      <Assistive>
        <SubTitle>店家推薦輔具</SubTitle>
        <RecommendationList>
          {products.map(
            (
              {
                id,
                name,
                description,
                rent,
                imgSrc,
                imgAlt,
                features,
                reasons,
              },
              index
            ) => (
              <Card key={`${id}-${index}`}>
                <ImageWrapper>
                  <Image src={imgSrc} alt={imgAlt} />
                  <PriceBadge>{formatCurrency(rent)}/ 月</PriceBadge>
                </ImageWrapper>
                <Info>
                  <Name>{name}</Name>
                  <Description>{description}</Description>
                  <FeatureList>
                    {features.map((feature, featureIndex) => (
                      <FeatureBadge key={`${id}-${featureIndex}`}>
                        <SuggestCheck size={24} />
                        {feature}
                      </FeatureBadge>
                    ))}
                  </FeatureList>
                </Info>
                <RecommendDescription>
                  <Name>推薦原因</Name>
                  <Reason value={reasons} readOnly />
                  <RentButton>
                    <MdShoppingCart size={24} />
                    加入購物車
                  </RentButton>
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
