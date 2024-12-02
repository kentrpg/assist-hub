import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${ ({ theme }) => theme.colors.primary };
  color: white;
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1344px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Newsletter = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  flex: 1;
`;

const SubscribeButton = styled.button`
  background-color: white;
  color: #3B82F6;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  input {
    width: 16px;
    height: 16px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

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
                  <Image src="/images/social/line-icon.png" alt="Line Icon" width={24} height={24} />
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <Image src="/images/social/facebook-icon.png" alt="Facebook Icon" width={24} height={24} />
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
              <label htmlFor="newsletter-consent">我想要了解最新的輔具資訊</label>
            </Checkbox>
          </Section>
        </FooterContent>

        <Copyright>
          Copyright 2024
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;