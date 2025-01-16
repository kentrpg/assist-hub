import {
  Card,
  Number,
  Title,
  Description,
  Image,
  Divider,
  NumberGroup,
} from "./styled";

import type { InquiryStepCardProps } from "@/components/pages/inquiry/data";
import { ImageWrapper } from "@/components/ui/images";

const InquiryStepCard: React.FC<InquiryStepCardProps> = ({
  step,
  title,
  imgSrc,
  $color,
}) => {
  return (
    <Card $color={$color}>
      <Description>
        <NumberGroup>
          <Number>{step}</Number>
          <Divider />
        </NumberGroup>
        <Title>{title}</Title>
      </Description>
      <ImageWrapper>
        <Image src={`/images/${imgSrc}`} alt={`Step ${step}`} />
      </ImageWrapper>
    </Card>
  );
};

export default InquiryStepCard;
