import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray["100"]};
  color: #333333;
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.gray["300"]};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  color: ${({ theme }) => theme.colors.gray["300"]};
  margin-bottom: 40px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Newsletter = styled.div`
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  flex: 1;
`;

export const SubscribeButton = styled.button`
  background-color: white;
  color: #3b82f6;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  input {
    width: 16px;
    height: 16px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
