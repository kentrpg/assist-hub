import type { ColorsType } from "@/types/uiProps";
import {
  CardWrapper,
  Number,
  Title,
  Description,
  Image,
  ImageWrapper,
  Divider,
  NumberGroup,
} from "./styled";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { breakpoints } from "@/styles/container";

export type InquiryStepCardProps = {
  step: "01" | "02" | "03";
  title: string;
  imgSrc: string;
  $bgColor: ColorsType;
};

const InquiryStepCard: React.FC<InquiryStepCardProps> = ({
  step,
  title,
  imgSrc,
  $bgColor,
}) => {
  const isTablet = useBreakpoint(breakpoints.sm);

  return (
    <CardWrapper $bgColor={$bgColor}>
      <Description>
        {isTablet && (
          <NumberGroup>
            <Number>{step}</Number>
            <Divider />
          </NumberGroup>
        )}
        <Title>{title}</Title>
      </Description>
      <ImageWrapper>
        <Image src={imgSrc} alt={`Step ${step}`} />
      </ImageWrapper>
    </CardWrapper>
  );
};

export default InquiryStepCard;
