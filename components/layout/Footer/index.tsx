import Link from "next/link";
import Image from "next/image";
import { Container1344 as Container } from "@/styles/container";
import {
  CategoriesSection,
  Checkbox,
  ContactInfo,
  ContactSection,
  Copyright,
  FooterContent,
  FooterLink,
  FooterWrapper,
  Input,
  LinkList,
  Newsletter,
  NewsletterSection,
  SocialLinks,
  SubscribeButton,
  Title,
} from "./styled";
import {
  IconWrapper,
  StyledFaFacebook,
  StyledFaLine,
} from "@/utils/react-icons/IconColor";
import { MdArrowForward } from "react-icons/md";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <CategoriesSection>
            <Title>輔具分類</Title>
            <LinkList>
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
            </LinkList>
          </CategoriesSection>
          <ContactSection as={"address"}>
            <Title>聯絡我們</Title>
            <ContactInfo>
              <li>營業時間：08:00-22:00（週一公休）</li>
              <li>電話：0912-345678</li>
              <li>地址：高雄市新興區</li>
              <SocialLinks>
                <IconWrapper as={Link} href="https://line.me" target="_blank">
                  <StyledFaLine size={24} />
                </IconWrapper>

                <IconWrapper
                  as={Link}
                  href="https://facebook.com"
                  target="_blank"
                >
                  <StyledFaFacebook size={24} />
                  {/* <StyledFaFacebook size={24} /> */}
                </IconWrapper>
              </SocialLinks>
            </ContactInfo>
          </ContactSection>

          <NewsletterSection>
            <Title>訂閱電子報</Title>
            <div>
              <Newsletter>
                <Input type="email" placeholder="輸入電子郵件" />
                <SubscribeButton>
                  <MdArrowForward size={24} />
                </SubscribeButton>
              </Newsletter>
              <Checkbox>
                <input type="checkbox" id="newsletter-consent" />
                <label htmlFor="newsletter-consent">
                  我想要了解最新的輔具資訊
                </label>
              </Checkbox>
            </div>
          </NewsletterSection>
        </FooterContent>

        <Copyright>Copyright ©2024</Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
