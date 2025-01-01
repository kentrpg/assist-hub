import { Button, Container, ImageWrapper, Image, Content, Title, Text } from "./styled";

const NotFound = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="/images/404x2.png" alt="404 image" width={565} height={368} />
      </ImageWrapper>
      <Content>
        <Title>哎呀！找不到這個頁面了！</Title>
        <Text>您嘗試進入的頁面可能已被移除、名稱更改，或暫時無法使用。</Text>
        <Button>回到首頁</Button>
      </Content>
    </Container>
  );
};

export default NotFound;
