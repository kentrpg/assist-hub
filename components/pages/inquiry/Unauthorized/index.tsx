import { ImageWrapper } from "@/components/ui/images";
import { Container, Image, Content, Title, Text } from "./styled";
import { AccentButton } from "@/styles/link";
import { inquiryUnauthorized } from "@/constants/statusPageContent";

const Unauthorized = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image {...inquiryUnauthorized.imageProps} width={570} height={368} />
      </ImageWrapper>
      <Content>
        <Title>
          {inquiryUnauthorized.title}
          <Text>{inquiryUnauthorized.description}</Text>
        </Title>
        <AccentButton href="/auth/signin">立即登入</AccentButton>
      </Content>
    </Container>
  );
};

export default Unauthorized;
