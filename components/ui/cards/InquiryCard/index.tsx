import { type InquiryCardProps } from "@/components/pages/inquiry/data";
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
import useFormatCurrency from "@/hooks/useFormatCurrency";

const InquiryCard = ({
  $color,
  name,
  description,
  price,
  imgSrc,
  features,
}: InquiryCardProps) => {
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
              {useFormatCurrency(price)}
              <PriceUnit>/月</PriceUnit>
            </Price>
          </DetailsWrapper>
          <ImageWrapper>
            <Image src={imgSrc} alt={name} />
          </ImageWrapper>
        </CardContent>
        <Features>
          <FeatureTitle>輔具特色</FeatureTitle>
          <FeatureGroup>
            {features.map((feature, index) => (
              <Feature key={index}>
                {/* <MdCheck size={24} /> */
                /* TBD: react-icons 在 styled 內設置 width、height、color 做法可以嗎 */}
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
