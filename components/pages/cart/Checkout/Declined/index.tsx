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

const Declined = () => {
  return (
    <Container>
      <Context>
        <ImageWrapper>
          <Image src="/images/checkout-declined.png" alt="declined image" />
        </ImageWrapper>
        <Title>付款失敗</Title>
        <Description>
          為了您的訂單安全，店內取貨時需出示<Mark>驗證碼</Mark>以完成核對
        </Description>
        <Group>
          <SecondaryButton href="/orders">查看訂單</SecondaryButton>
          <PrimaryButton href="/cart">返回購物車</PrimaryButton>
        </Group>
      </Context>
    </Container>
  );
};

export default Declined;
