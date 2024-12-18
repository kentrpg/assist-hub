import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 597px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  background-image: url("/images/footer-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding-bottom: 50px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  color: ${({ theme }) => theme.colors.gray["300"]};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CategoriesSection = styled(Section)`
  grid-column: 1 / 5;
`;

export const ContactSection = styled(Section)`
  grid-column: 6 / 9;
`;

export const NewsletterSection = styled(Section)`
  grid-column: 10 / 13;
`;

export const Title = styled.span`
  /* display: inline-block; */
  font-size: 20px;
  font-weight: bold;
  /* margin-bottom: 16px; */
`;

export const LinkList = styled.div`
  display: flex;
  gap: 40px;

  & > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const FooterLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContactInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SocialLinks = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Newsletter = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray["300"]};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.gray["100"]};
  transition: box-shadow 0.13s ease-out, border-color 0.1s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary},
      0 0 0 1000px ${({ theme }) => theme.colors.gray["100"]} inset;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  padding-right: 36px;
`;

export const SubscribeButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;

  svg {
    vertical-align: top;
    color: ${({ theme }) => theme.colors.gray["300"]};
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  input[type="checkbox"] {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid ${({ theme }) => theme.colors.textMuted};
    border-radius: 2px;
    cursor: pointer;
    position: relative;

    &:checked {
      background-color: ${({ theme }) => theme.colors.textMuted};
    }

    &:checked::after {
      content: "✔";
      color: #fff;
      font-size: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Copyright = styled.p`
  text-align: right;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 40px;
`;
