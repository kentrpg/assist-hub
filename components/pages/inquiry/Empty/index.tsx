import { Container1116 as Container } from "@/styles/container";
import {
  Title,
  TitleDescription as Description,
  TitleGroup as Group,
} from "@/components/ui/titles";
import { FlexAlignCenter } from "@/styles/flex";
import {
  Step,
  Card,
  Image,
  StepGroup,
  StepTitle,
  StepDescription,
} from "./styled";
import { InquiryEmpties } from "@/constants/imagePath";
import { InquiryStepCircle } from "@/components/ui/circulars";
import { PrimaryButton } from "@/styles/link";

const InquiryEmpty = () => {
  return (
    <Container>
      <Group>
        <Title>詢問單教學</Title>
        <Description>簡單4個步驟，讓專業店家幫您找</Description>
      </Group>
      <Step>
        {InquiryEmpties.map((step, index) => (
          <Card key={step.id}>
            <InquiryStepCircle>{index + 1}</InquiryStepCircle>
            <Image {...step.type} width={156} height={156} />
            <StepGroup>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepGroup>
          </Card>
        ))}
      </Step>
      <FlexAlignCenter>
        <PrimaryButton href="/product">瀏覽輔具</PrimaryButton>
      </FlexAlignCenter>
    </Container>
  );
};

export default InquiryEmpty;
