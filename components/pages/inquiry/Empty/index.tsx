import { Container1116 as Container } from "@/styles/container";
import {
  PageTitle as Title,
  PageTitleDescription as Description,
  PageTitleGroup as Group,
} from "@/components/ui/titles";
import { FlexAlignCenter } from "@/styles/flex";
import { MdArrowForward } from "react-icons/md";
import {
  Step,
  Card,
  Image,
  StepGroup,
  StepTitle,
  StepDescription,
} from "./styled";
import { AddInquirySteps } from "./data";
import { InquiryStepCircle } from "@/components/ui/circulars";
import { PrimaryIconButton } from "@/components/ui/buttons";

const InquiryEmpty = () => {
  return (
    <Container>
      <Group>
        <Title>詢問單教學</Title>
        <Description>簡單4個步驟，讓專業店家幫您找</Description>
      </Group>
      <Step>
        {AddInquirySteps.map((step, index) => (
          <Card key={step.id}>
            <InquiryStepCircle>{index + 1}</InquiryStepCircle>
            <Image src={step.imgSrc} alt={step.title} />
            <StepGroup>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepGroup>
          </Card>
        ))}
      </Step>
      <FlexAlignCenter>
        <PrimaryIconButton>
          瀏覽輔具
          <MdArrowForward size={27} />
        </PrimaryIconButton>
      </FlexAlignCenter>
    </Container>
  );
};

export default InquiryEmpty;
