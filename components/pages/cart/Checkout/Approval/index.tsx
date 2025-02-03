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
          <Image
            src="/images/successful.webp"
            alt="插畫顯示一名穿淺灰色上衣的男子使用拐杖站立，右腳打著石膏，象徵正在康復中的狀態。"
            width={200}
            height={320}
          />
        </ImageWrapper>
        <Title>付款成功</Title>
        <Description>
          為了您的訂單安全，店內取貨時需出示<Mark>驗證碼</Mark>以完成核對
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
