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

const InquiryCard = ({
  id,
  $color,
  name,
  description,
  price,
  imgSrc,
  features,
}: InquiryCardProps) => {
  return (
    <Card key={id} $color={$color}>
      <FlexFullHeight>
        <CardContent>
          <DetailsWrapper>
            <Details>
              <Name>{name}</Name>
              <Description>{description}</Description>
            </Details>
            <Price>
              {price}元<PriceUnit>/月</PriceUnit>
            </Price>
          </DetailsWrapper>
          <ImageWrapper>
            <Image src={imgSrc} alt={name} />
          </ImageWrapper>
        </CardContent>
        <Features>
          <FeatureTitle>輔具特色</FeatureTitle>
          <FeatureGroup>
            {features.map(({ id: featureId, text }) => (
              <Feature key={featureId}>
                {/* <MdCheck size={24} /> */
                /* TBD: react-icons 在 styled 內設置 width、height、color 做法可以嗎 */}
                <InquiryCheck />
                {text}
              </Feature>
            ))}
          </FeatureGroup>
        </Features>
      </FlexFullHeight>
    </Card>
  );
};

export default InquiryCard;
