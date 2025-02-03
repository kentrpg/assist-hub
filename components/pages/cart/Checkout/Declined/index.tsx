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
          <Image
            src="/images/failed.webp"
            alt="插畫顯示一名穿紅色衣服的男子坐在椅子上，右腳打著石膏，象徵受傷或行動不便的狀態。"
            width={200}
            height={320}
          />
        </ImageWrapper>
        <Title>付款失敗</Title>
        <Description>
          為了您的訂單安全，店內取貨時需出示<Mark>驗證碼</Mark>以完成核對
        </Description>
        <Group>
          <SecondaryButton href="/user/order">查看訂單</SecondaryButton>
          <PrimaryButton href="/cart">返回購物車</PrimaryButton>
        </Group>
      </Context>
    </Container>
  );
};

export default Declined;
