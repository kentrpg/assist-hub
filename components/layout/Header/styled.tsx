import styled from "styled-components";
import { Container1344 } from "@/styles/container";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

export const Container = styled(Container1344)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 9999px;
  padding: 15px 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  gap: 16px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textprimary};
`;

export const LogoText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textprimary};
  margin-right: 30px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const NavLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textprimary};
  transition: color 0.2s;

  &:hover {
    color: #0f172a;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 60px;
  border: none;
  border-radius: 9999px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.2s;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }
`;

export const CartButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary}; /* 黃色 */
`;

export const SearchButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.accent}; /* 橙色 */
`;

export const AccountButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary}; /* 藍色 */
`;

export const LogoutButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 13px 20px 13px;
`;
