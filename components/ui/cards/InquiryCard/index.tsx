import { InquiryCheck } from "@/utils/react-icons/CheckIcon";
import {
  Card,
  CardContent,
  Description,
  Details,
  DetailsWrapper,
  Feature,
  FeatureGroup,
  Features,
  FeatureTitle,
  FlexFullHeight,
  Image,
  Name,
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
  return (
    <Card $color={$color}>
      <FlexFullHeight>
        <CardContent>
          <DetailsWrapper>
            <Details>
              <Name>{name}</Name>
              <Description>{description}</Description>
            </Details>
            <Price>
              {formatCurrency(rent)}
              <PriceUnit>/月</PriceUnit>
            </Price>
          </DetailsWrapper>
          <ImageWrapper>
            <Image src={imgSrc} alt={imgAlt} />
          </ImageWrapper>
        </CardContent>
        <Features>
          <FeatureTitle>輔具特色</FeatureTitle>
          <FeatureGroup>
            {features.map((feature, index) => (
              <Feature key={index}>
                <InquiryCheck />
                {feature}
              </Feature>
            ))}
          </FeatureGroup>
        </Features>
      </FlexFullHeight>
    </Card>
  );
};

export default InquiryCard;
