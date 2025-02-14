import { Container1164 as Container } from "@/styles/container";
import {
  Context,
  Title,
  Description,
  Group,
  ImageWrapper,
  Image,
} from "./styled";
import { SecondaryButton, PrimaryButton } from "@/styles/link";
import { checkoutDeclined } from "@/constants/statusPageContent";

const Declined = () => {
  const { imageProps, title, description } = checkoutDeclined;

  return (
    <Container>
      <Context>
        <ImageWrapper>
          <Image {...imageProps} width={200} height={320} />
        </ImageWrapper>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <Group>
          <SecondaryButton href="/user/order">查看訂單</SecondaryButton>
          <PrimaryButton href="/cart">返回購物車</PrimaryButton>
        </Group>
      </Context>
    </Container>
  );
};

export default Declined;
