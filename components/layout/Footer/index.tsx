import { Container1344 as Container } from "@/styles/container";
import {
  Categories,
  AddressInfo,
  Contact,
  Copyright,
  Content,
  CategoryLink,
  Wrapper,
  EmailField,
  CategoryLinkList,
  Newsletter,
  SubscriptionField,
  SocialMediaLinks,
  SubscribeButton,
  Title,
  CategoryLinks,
} from "./styled";
import { IconLinkWrapper } from "@/utils/react-icons/iconWrappers";
import { MdArrowForward } from "react-icons/md";
import { CheckboxField } from "@/components/ui/CheckBox";
import { FaFacebookSquare, FaLine } from "react-icons/fa";
import { useTheme } from "styled-components";

const Footer = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Container>
        <Content>
          <Categories>
            <Title>輔具分類</Title>
            <CategoryLinkList>
              <CategoryLinks>
                <CategoryLink href="#">行動輔椅</CategoryLink>
                <CategoryLink href="#">臥室寢具</CategoryLink>
                <CategoryLink href="#">呼吸照護</CategoryLink>
                <CategoryLink href="#">拐杖步行</CategoryLink>
              </CategoryLinks>
              <CategoryLinks>
                <CategoryLink href="#">如廁沐浴</CategoryLink>
                <CategoryLink href="#">居家照護</CategoryLink>
                <CategoryLink href="#">輔具、護具</CategoryLink>
              </CategoryLinks>
            </CategoryLinkList>
          </Categories>
          <Contact>
            <Title>聯絡我們</Title>
            <AddressInfo>
              <span>營業時間：08:00-22:00（週一公休）</span>
              <span>電話：0912-345678</span>
              <span>地址：高雄市新興區</span>
              <SocialMediaLinks>
                <IconLinkWrapper
                  href="https://line.me"
                  target="_blank"
                  size={24}
                  backgroundColor="white"
                  borderRadius={4}
                >
                  <FaLine size={24} fill={theme.colors.lineLogo} />
                </IconLinkWrapper>
                <IconLinkWrapper
                  href="https://www.facebook.com/hexschool"
                  target="_blank"
                  size={24}
                  backgroundColor="white"
                  borderRadius={4}
                >
                  <FaFacebookSquare size={24} fill={theme.colors.fbLogo} />
                </IconLinkWrapper>
              </SocialMediaLinks>
            </AddressInfo>
          </Contact>

          <Newsletter>
            <Title>訂閱電子報</Title>
            <SubscriptionField>
              <EmailField type="email" placeholder="輸入電子郵件" />
              <SubscribeButton>
                <MdArrowForward size={24} fill={theme.colors.textMuted} />
              </SubscribeButton>
            </SubscriptionField>
            <CheckboxField
              id="newsletter-consent"
              label="我想要了解最新的輔具資訊"
              gap={3}
              defaultChecked={false}
              fontSize={16}
              size={21}
              checkboxIconColor="textMuted"
              labelColor="gray['300']"
            />
          </Newsletter>
        </Content>

        <Copyright>Copyright ©2024</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
