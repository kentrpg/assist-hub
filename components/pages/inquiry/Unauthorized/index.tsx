import { Container912 as Container } from "@/styles/container";
import { InquiryStep } from "./styled";
import {
  Title,
  TitleDescription as Description,
  TitleGroup as Group,
} from "@/components/ui/titles";
import { FlexAlignCenter } from "@/styles/flex";
import { inquiryStepCards } from "../data";
import InquiryStepCard from "@/components/ui/cards/InquiryStepCard";
import { AccentButton } from "../styled";

const NotFound = () => {
  return (
    <Container>
      <Group>
        <Title>還找不到合適的輔具？</Title>
        <Description>建立詢問單，我們幫您搞定！</Description>
      </Group>
      <InquiryStep>
        {inquiryStepCards.map(({ step, title, imgSrc, $color }) => (
          <InquiryStepCard
            key={step}
            step={step}
            title={title}
            imgSrc={imgSrc}
            $color={$color}
          />
        ))}
      </InquiryStep>
      <FlexAlignCenter>
        <AccentButton>建立詢問單</AccentButton>
      </FlexAlignCenter>
    </Container>
  );
};

export default NotFound;
