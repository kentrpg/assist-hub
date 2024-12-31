import { Container912 as Container } from "@/styles/container";
import {
  DraftSubmitButton,
  InquiryStep,
  Title,
  TitleDescription,
  TitleGroup,
} from "./styled";
import { FlexAlignCenter } from "@/styles/flex";
import { inquiryStepCards } from "./data";
import InquiryStepCard from "@/components/ui/cards/InquiryStepCard";

const NotFound = () => {
  return (
    <Container>
      <TitleGroup>
        <Title>還找不到合適的輔具？</Title>
        <TitleDescription>建立詢問單，我們幫您搞定！</TitleDescription>
      </TitleGroup>
      <InquiryStep>
        {inquiryStepCards.map(({ step, title, imgSrc, $color }) => (
          // TBD: 問題 key 需要加入 prop type 避免沒有填入 key 嗎？
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
        <DraftSubmitButton>建立詢問單</DraftSubmitButton>
      </FlexAlignCenter>
    </Container>
  );
};

export default NotFound;
