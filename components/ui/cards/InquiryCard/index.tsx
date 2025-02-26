import { InquiryCheck } from "@/utils/react-icons/CheckIcon";
import {
  Card,
  Content,
  Description,
  Info,
  Feature,
  FeatureGroup,
  Features,
  FeatureTitle,
  Image,
  Title,
  Price,
  PriceUnit,
} from "./styled";
import { ImageWrapper } from "@/components/ui/images";
import { formatCurrency } from "@/helpers/format/currency";
import { InquiryProduct } from "@/types/getInquiry";

const InquiryCard = ({
  $color,
  name,
  description,
  rent,
  imgSrc,
  imgAlt,
  features,
}: InquiryProduct) => {
  const defaultedFeatures = features.length ? features : ["店家推薦"];

  return (
    <Card $color={$color}>
      <Title>{name}</Title>
      <Content>
        <Info>
          <Description>{description}</Description>
          <Price>
            {formatCurrency(rent)}
            <PriceUnit>/月</PriceUnit>
          </Price>
        </Info>
        <ImageWrapper>
          <Image src={imgSrc} alt={imgAlt} />
        </ImageWrapper>
      </Content>
      <Features>
        <FeatureTitle>輔具特色</FeatureTitle>
        <FeatureGroup>
          {defaultedFeatures.map((feature, index) => (
            <Feature key={index}>
              <InquiryCheck />
              {feature}
            </Feature>
          ))}
        </FeatureGroup>
      </Features>
    </Card>
  );
};

export default InquiryCard;
