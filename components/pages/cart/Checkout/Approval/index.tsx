import Breadcrumb from "@/components/ui/Breadcrumb";
import { Container1164 as Container } from "@/styles/container";
import {
  Context,
  Title,
  Description,
  Mark,
  Group,
  ImageWrapper,
  Image,
} from "./styled";
import { SecondaryButton, PrimaryButton } from "@/styles/link";
import { CheckoutApproval } from "@/constants/imagePath";
import { StringToJSXWrapper } from "@/components/ui/StringToJSXWrapper";

const Approval = () => {
  return (
    <Container>
      <Breadcrumb mode="payment" />
      <Context>
        <ImageWrapper>
          <Image {...CheckoutApproval.type} width={200} height={320} />
        </ImageWrapper>
        <Title>{CheckoutApproval.title}</Title>
        <Description>
          <StringToJSXWrapper
            text={CheckoutApproval.description}
            convertString={CheckoutApproval.convertString}
          >
            {({ text, index }) => <Mark key={index}>{text}</Mark>}
          </StringToJSXWrapper>
        </Description>
        <Group>
          <SecondaryButton href="/product">繼續逛逛</SecondaryButton>
          <PrimaryButton href="/user/order">查看訂單</PrimaryButton>
        </Group>
      </Context>
    </Container>
  );
};

export default Approval;
