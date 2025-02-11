import { ImageWrapper } from "@/components/ui/images";
import { Container, Image, Content, Title, Text, InlineText } from "./styled";
import { PrimaryButton } from "@/styles/link";
import { serverBusy } from "@/constants/statusPageContent";
import {
  MarkerProps,
  StringToJSXWrapper,
} from "@/components/ui/StringToJSXWrapper";

const Error500 = () => {
  const { description, convertString = [] } = serverBusy;
  const MarkMarker = ({ text }: MarkerProps) => <InlineText>{text}</InlineText>;

  return (
    <Container>
      <ImageWrapper>
        <Image {...serverBusy.imageProps} width={570} height={368} />
      </ImageWrapper>
      <Content>
        <Title>
          {serverBusy.title}
          <Text>
            <StringToJSXWrapper
              text={description}
              convertString={convertString}
              MarkerComponent={MarkMarker}
            />
          </Text>
        </Title>
        <PrimaryButton href="/">回到首頁</PrimaryButton>
      </Content>
    </Container>
  );
};

export default Error500;
