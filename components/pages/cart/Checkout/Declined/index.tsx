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
import { checkoutDeclined } from "@/constants/statusPageContent";
import {
  MarkerProps,
  StringToJSXWrapper,
} from "@/components/ui/StringToJSXWrapper";

const Declined = () => {
  const { description, convertString = [] } = checkoutDeclined;

  const MarkMarker = ({ text }: MarkerProps) => <Mark>{text}</Mark>;

  return (
    <Container>
      <Context>
        <ImageWrapper>
          <Image {...checkoutDeclined.imageProps} width={200} height={320} />
        </ImageWrapper>
        <Title>{checkoutDeclined.title}</Title>
        <Description>
          <StringToJSXWrapper
            text={description}
            convertString={convertString}
            MarkerComponent={MarkMarker}
          />
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
