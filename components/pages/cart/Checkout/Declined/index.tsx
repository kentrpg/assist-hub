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
import { CheckoutDeclined } from "@/constants/imagePath";
import { StringToJSXWrapper } from "@/components/ui/StringToJSXWrapper";

const Declined = () => {
  const { description, convertString = [] } = CheckoutDeclined;

  return (
    <Container>
      <Context>
        <ImageWrapper>
          <Image {...CheckoutDeclined.type} width={200} height={320} />
        </ImageWrapper>
        <Title>{CheckoutDeclined.title}</Title>
        <Description>
          <StringToJSXWrapper text={description} convertString={convertString}>
            {({ text, index }) => <Mark key={index}>{text}</Mark>}
          </StringToJSXWrapper>
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
