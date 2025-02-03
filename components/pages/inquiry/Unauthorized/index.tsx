import { ImageWrapper } from "@/components/ui/images";
import { Container, Image, Content, Title, Text } from "./styled";
import { AccentButton } from "@/styles/link";

const Unauthorized = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/images/inquiry-NotLoggedIn-3.webp"
          alt="插畫顯示一位醫生透過手機與患者進行遠端醫療諮詢，旁邊有心電圖圖案和對話框圖示，象徵醫療數據傳遞與交流。"
          width={570}
          height={368}
        />
      </ImageWrapper>
      <Content>
        <Title>
          還在為合適的輔具煩惱？
          <Text>透過詢問單獲取免費1對1專業建議</Text>
        </Title>
        <AccentButton href="/auth/signin">立即登入</AccentButton>
      </Content>
    </Container>
  );
};

export default Unauthorized;
