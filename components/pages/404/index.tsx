import { ImageWrapper } from "@/components/ui/images";
import { Container, Image, Content, Title, Text } from "./styled";
import { PrimaryButton } from "@/styles/link";

const NotFound = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/images/404.webp"
          alt="404 image"
          width={565}
          height={368}
        />
      </ImageWrapper>
      <Content>
        <Title>
          哎呀！找不到這個頁面了！
          <Text>您嘗試進入的頁面可能已被移除、名稱更改，或暫時無法使用。</Text>
        </Title>
        <PrimaryButton href="/">回到首頁</PrimaryButton>
      </Content>
    </Container>
  );
};

export default NotFound;
