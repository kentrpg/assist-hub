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

const Approval = () => {
  return (
    <Container>
      <Breadcrumb />
      <Context>
        <ImageWrapper>
          <Image src="/images/checkout-approval.png" alt="approval image" />
        </ImageWrapper>
        <Title>付款成功</Title>
        <Description>
          為了您的訂單安全，店內取貨時需出示<Mark>驗證碼</Mark>以完成核對
        </Description>
        <Group>
          <SecondaryButton href="/products">繼續逛逛</SecondaryButton>
          <PrimaryButton href="/orders">查看訂單</PrimaryButton>
        </Group>
      </Context>
    </Container>
  );
};

export default Approval;
