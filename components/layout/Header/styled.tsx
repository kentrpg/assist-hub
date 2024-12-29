import styled from "styled-components";
import { Container1344 } from "@/styles/container";
import Link from "next/link";
import { NavBarShadow } from "@/styles/effect";
import { ButtonRadius } from "@/styles/borderRadius";

export const Wrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

export const Container = styled(Container1344)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  ${ButtonRadius};
  padding: 15px 50px;
  ${NavBarShadow};
  gap: 16px;
`;

export const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled.img`
  width: 20px;
  height: 20px;
`;

export const Name = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-right: 30px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonGroup = styled.div`
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
  ${ButtonRadius};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.2s;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }
`;

export const CartButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const SearchButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.accent};
`;

export const AccountButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LogoutButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 13px 20px 13px;
`;
