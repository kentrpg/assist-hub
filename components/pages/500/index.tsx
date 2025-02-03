import { ImageWrapper } from "@/components/ui/images";
import { Container, Image, Content, Title, Text, Br } from "./styled";
import { PrimaryButton } from "@/styles/link";

const Error500 = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/images/server_busy.webp"
          alt="插畫顯示伺服器房內的場景，三位技術人員正在操作筆記型電腦，周圍有伺服器機櫃、資料庫圖標、齒輪與雲端符號，象徵數據處理與雲端運算的概念。"
          width={570}
          height={368}
        />
      </ImageWrapper>
      <Content>
        <Title>
          伺服器忙線中，請稍候
          <Text>
            我們目前正處於高峰使用時段，系統正在處理大量請求。
            <Br />
            請您耐心等待，我們會盡快為您服務！
          </Text>
        </Title>
        <PrimaryButton href="/">回到首頁</PrimaryButton>
      </Content>
    </Container>
  );
};

export default Error500;
