import { ImageWrapper } from "@/components/ui/images";
import { Container, Image, Content, Title, Text, Group } from "./styled";
import { PrimaryButton } from "@/styles/link";
import { serverBusy } from "@/constants/statusPageContent";

const Error500 = () => {
  const { imageProps, title, description } = serverBusy;

  return (
    <Container>
      <ImageWrapper>
        <Image {...imageProps} width={570} height={368} />
      </ImageWrapper>
      <Content>
        <Group>
          <Title>{title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: description }} />
        </Group>
        <PrimaryButton href="/">回到首頁</PrimaryButton>
      </Content>
    </Container>
  );
};

export default Error500;
