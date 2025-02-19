import { ImageWrapper } from "@/components/ui/images";
import { Container, Image, Content, Title, Text } from "./styled";
import { PrimaryButton } from "@/styles/link";
import { notFound } from "@/constants/statusPageContent";

const NotFound = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image {...notFound.imageProps} width={570} height={368} />
      </ImageWrapper>
      <Content>
        <Title>
          {notFound.title}
          <Text>{notFound.description}</Text>
        </Title>
        <PrimaryButton href="/">回到首頁</PrimaryButton>
      </Content>
    </Container>
  );
};

export default NotFound;
