import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import Link from "next/link";
import { Container1344 } from "@/styles/container";

export const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
`;

export const Container = styled(Container1344)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledLink = styled(Link)`
  color: #374151;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #111827;
  }
`;

export const Logo = styled(Link)`
  // ...existing code...
`;

export const LogoImage = styled.img`
  // ...existing code...
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 8px 16px 8px 40px;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b82f6;
  }
`;

export const SearchIcon = styled(MdSearch)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

export const CartButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: #111827;
  }
`;

export const LogoutButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.error};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dc2626;
  }
`;
