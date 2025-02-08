import { ImageWrapper } from "@/components/ui/images";
import { Container, Image, Content, Title, Text } from "./styled";
import { AccentButton } from "@/styles/link";
import { InquiryUnauthorized } from "@/constants/imagePath";

const Unauthorized = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image {...InquiryUnauthorized.type} width={570} height={368} />
      </ImageWrapper>
      <Content>
        <Title>
          {InquiryUnauthorized.title}
          <Text>{InquiryUnauthorized.description}</Text>
        </Title>
        <AccentButton href="/auth/signin">立即登入</AccentButton>
      </Content>
    </Container>
  );
};

export default Unauthorized;
