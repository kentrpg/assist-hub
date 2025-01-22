import styled from "styled-components";
import Link from "next/link";

export const SidebarContainer = styled.aside`
  width: 280px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px 16px;
`;

export const TopSection = styled.div`
  display: grid;
  place-content: center;
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* background: ${({ theme }) => theme.colors.primary}; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled.div`
  width: 100%;
`;

export const NavLink = styled(Link)<{ active?: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${({ theme, active }) =>
    active === "true" ? theme.colors.white : theme.colors.textSecondary};
  background: ${({ theme, active }) =>
    active === "true" ? theme.colors.primary : "transparent"};
  text-decoration: none;
  transition: all 0.1s ease;

  &:hover {
    ${({ active, theme }) =>
      active !== "true" &&
      `
      background: ${theme.colors.infoLight};
      color: ${theme.colors.primary};
    `}
  }
`;
