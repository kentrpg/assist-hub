import Link from "next/link";
import Image from "next/image";
import { Container1344 as Container } from "@/styles/container";
import {
  Checkbox,
  ContactInfo,
  Copyright,
  FooterContent,
  FooterLink,
  FooterWrapper,
  Input,
  LinkList,
  Newsletter,
  Section,
  SocialLinks,
  SubscribeButton,
  Title,
} from "./styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <Section>
            <Title>輔具分類</Title>
            <LinkList>
              <FooterLink href="/categories/mobility">行動輔椅</FooterLink>
              <FooterLink href="/categories/bathroom">如廁沐浴</FooterLink>
              <FooterLink href="/categories/bedroom">臥室寢具</FooterLink>
              <FooterLink href="/categories/living">居家照護</FooterLink>
              <FooterLink href="/categories/breathing">呼吸照護</FooterLink>
              <FooterLink href="/categories/accessories">輔具、護具</FooterLink>
              <FooterLink href="/categories/transfer">拐杖步行</FooterLink>
            </LinkList>
          </Section>

          <Section>
            <Title>聯絡我們</Title>
            <ContactInfo>
              <p>營業時間：08:00-22:00（週一公休）</p>
              <p>電話：0912-345678</p>
              <p>地址：高雄市新興區</p>
              <SocialLinks>
                <Link href="https://line.me" target="_blank">
                  <Image
                    src="/images/social/line-icon.png"
                    alt="Line Icon"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <Image
                    src="/images/social/facebook-icon.png"
                    alt="Facebook Icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </SocialLinks>
            </ContactInfo>
          </Section>

          <Section>
            <Title>訂閱電子報</Title>
            <Newsletter>
              <Input type="email" placeholder="輸入電子郵件" />
              <SubscribeButton>→</SubscribeButton>
            </Newsletter>
            <Checkbox>
              <input type="checkbox" id="newsletter-consent" />
              <label htmlFor="newsletter-consent">
                我想要了解最新的輔具資訊
              </label>
            </Checkbox>
          </Section>
        </FooterContent>

        <Copyright>Copyright 2024</Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
