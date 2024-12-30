import {
  Card,
  Number,
  Title,
  Description,
  Image,
  Divider,
  NumberGroup,
} from "./styled";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { breakpoints } from "@/styles/container";
import type { InquiryStepCardProps } from "@/components/pages/inquiry/data";
import { ImageWrapper } from "@/components/ui/images";

const InquiryStepCard: React.FC<InquiryStepCardProps> = ({
  step,
  title,
  imgSrc,
  $color,
}) => {
  const isTablet = useBreakpoint(breakpoints.sm);

  return (
    <Card $color={$color}>
      <Description>
        {/* TBD: 待確認使用條件渲染替代 css display: none 是否合適 */}
        {isTablet && (
          <NumberGroup>
            <Number>{step}</Number>
            <Divider />
          </NumberGroup>
        )}
        <Title>{title}</Title>
      </Description>
      <ImageWrapper>
        <Image src={`/images/${imgSrc}`} alt={`Step ${step}`} />
      </ImageWrapper>
    </Card>
  );
};

export default InquiryStepCard;
