import { Container1116 as Container } from "@/styles/container";
import { Title, TitleDescription, TitleGroup } from "../styled";
import { FlexAlignCenter } from "@/styles/flex";
import { MdArrowForward } from "react-icons/md";
import {
  StepContainer,
  StepItem,
  StepNumber,
  StepImage,
  StepContent,
  StepTitle,
  StepDescription,
  Button,
} from "./styled";
import { AddInquirySteps } from "./data";
import { InquiryStepCircle } from "@/components/ui/circulars";

const InquiryEmpty = () => {
  return (
    <Container>
      <TitleGroup>
        <Title>詢問單教學</Title>
        <TitleDescription>簡單4個步驟，讓專業店家幫您找</TitleDescription>
      </TitleGroup>
      <StepContainer>
        {AddInquirySteps.map((step, index) => (
          <StepItem key={step.id}>
            <StepNumber>
              <InquiryStepCircle>{index + 1}</InquiryStepCircle>
            </StepNumber>
            <StepImage src={step.imgSrc} alt={step.title} />
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </StepItem>
        ))}
      </StepContainer>
      <FlexAlignCenter>
        <Button>
          瀏覽輔具
          <MdArrowForward size={27} />
        </Button>
      </FlexAlignCenter>
    </Container>
  );
};

export default InquiryEmpty;
