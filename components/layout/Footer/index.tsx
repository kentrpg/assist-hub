import Link from "next/link";
import { Container1344 as Container } from "@/styles/container";
import {
  Categories,
  Checkbox,
  ContactInfo,
  Contact,
  Copyright,
  Content,
  FooterLink,
  Wrapper,
  Input,
  CategoriesLink,
  Newsletter,
  InputWrapper,
  SocialLinks,
  SubscribeButton,
  Title,
} from "./styled";
import {
  IconWhiteWrapper,
  StyledFaFacebook,
  StyledFaLine,
} from "@/utils/react-icons/IconColor";
import { MdArrowForward } from "react-icons/md";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Categories>
            <Title>輔具分類</Title>
            <CategoriesLink>
              <div>
                <FooterLink href="#">行動輔椅</FooterLink>
                <FooterLink href="#">臥室寢具</FooterLink>
                <FooterLink href="#">呼吸照護</FooterLink>
                <FooterLink href="#">拐杖步行</FooterLink>
              </div>
              <div>
                <FooterLink href="#">如廁沐浴</FooterLink>
                <FooterLink href="#">居家照護</FooterLink>
                <FooterLink href="#">輔具、護具</FooterLink>
              </div>
            </CategoriesLink>
          </Categories>
          <Contact as={"address"}>
            <Title>聯絡我們</Title>
            <ContactInfo>
              <li>營業時間：08:00-22:00（週一公休）</li>
              <li>電話：0912-345678</li>
              <li>地址：高雄市新興區</li>
              <SocialLinks>
                <IconWhiteWrapper
                  as={Link}
                  href="https://line.me"
                  target="_blank"
                >
                  <StyledFaLine size={24} />
                </IconWhiteWrapper>

                <IconWhiteWrapper
                  as={Link}
                  href="https://facebook.com"
                  target="_blank"
                >
                  <StyledFaFacebook size={24} />
                </IconWhiteWrapper>
              </SocialLinks>
            </ContactInfo>
          </Contact>

          <Newsletter>
            <Title>訂閱電子報</Title>
            <InputWrapper>
              <Input type="email" placeholder="輸入電子郵件" />
              <SubscribeButton>
                <MdArrowForward size={24} />
              </SubscribeButton>
            </InputWrapper>
            <Checkbox>
              <input type="checkbox" id="newsletter-consent" />
              <label htmlFor="newsletter-consent">
                我想要了解最新的輔具資訊
              </label>
            </Checkbox>
          </Newsletter>
        </Content>

        <Copyright>Copyright ©2024</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
