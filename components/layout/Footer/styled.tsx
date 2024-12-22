import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.footer`
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  background-image: url("/images/footer-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  color: ${({ theme }) => theme.colors.gray["300"]};
`;

export const Categories = styled.div`
  grid-column: 1 / 5;
`;

export const Contact = styled.div`
  grid-column: 6 / 9;
`;

export const Newsletter = styled.div`
  grid-column: 10 / 13;
`;

export const Title = styled.span`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textprimary};
  margin-bottom: 16px;
`;

export const CategoryLinkList = styled.div`
  display: flex;
  gap: 40px;
`;

export const CategoryLinks = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CategoryLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray["300"]};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const AddressInfo = styled.address`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SubscriptionField = styled.div`
  max-width: 260px;
  position: relative;
  margin-bottom: 10px;
`;

export const EmailField = styled.input`
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
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Copyright = styled.p`
  text-align: right;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 28px;
`;
