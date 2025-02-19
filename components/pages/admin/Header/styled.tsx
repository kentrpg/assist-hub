import { InputRadius } from "@/styles/borderRadius";
import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const TableToolbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  column-gap: 20px;
`;

export const TabList = styled.div`
  display: flex;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  background: ${({ theme }) => theme.colors.white};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: none;
  background: none;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textSecondary};
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 3px;
    background-color: ${({ $active, theme }) =>
      $active ? theme.colors.white : "transparent"};
    border-bottom: ${({ $active, theme }) =>
      $active ? `2px solid ${theme.colors.primary}` : "none"};
    transition: all 0.1s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Badge = styled.span`
  background: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 1px 6px;
  border-radius: 12px;
  font-size: 12px;
  min-width: 20px;
  text-align: center;
`;

export const CountGroup = styled.div`
  position: relative;
`;

export const CountLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-right: 10px;
`;

export const CountSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  ${InputRadius};
  background: transparent;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 8px 32px 8px 12px;
`;

export const SelectArrowIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 200px;
  ${InputRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 8px 12px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey200};
  }

  &:hover,
  &:focus {
    opacity: 1;
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
  }
`;
