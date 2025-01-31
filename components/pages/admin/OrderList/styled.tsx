import { InputRadius, RoundedFull } from "@/styles/borderRadius";
import { BgColor, Color } from "@/types/uiProps";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background: ${({ theme }) => theme.colors.white};
`;

export const Tbody = styled.tbody`
  background: ${({ theme }) => theme.colors.white};
`;

export const Tr = styled.tr<{ $isCompleted?: boolean }>`
  opacity: ${({ $isCompleted }) => ($isCompleted ? 0.4 : 1)};
  transition: opacity 0.1s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: normal;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;

  &:first-child {
    cursor: pointer;
    a {
      color: ${({ theme }) => theme.colors.textSecondary};
      text-decoration: underline;
      text-underline-offset: 1px;
    }
  }

  small {
    color: ${({ theme }) => theme.colors.textMuted};
    display: block;
    margin-top: 4px;
  }
`;

export const Sort = styled.div`
  display: flex;
  align-items: center;
`;

export const SortIcon = styled.button`
  background: transparent;
  font-size: 0;
  color: ${({ theme }) => theme.colors.grey200};
  svg:last-child {
    margin-left: -8px;
  }
`;

export const StatusButton = styled.button<Color & BgColor>`
  padding: 4px 12px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  color: ${({ theme, $color }) => theme.colors[$color]};
  background: ${({ theme, $bgColor }) => theme.colors[$bgColor]};
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.border};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.white};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.textSecondary};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:first-child,
  &:last-child {
    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Dropdown styles
export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownTrigger = styled.button<Color>`
  ${InputRadius};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 4px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  /* border: 1px solid
    ${({ theme, $color }) =>
      $color === "primary" ? theme.colors.grey100 : theme.colors[$color]}; */
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  padding: 4px 12px;

  /* &:hover {
    background: ${({ theme }) => theme.colors.grey100};
  } */
`;

export const DropdownContent = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 85px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 1;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;

export const DropdownItem = styled.div<Color & { $isSelected: boolean }>`
  padding: 6px 8px;
  font-size: 13px;
  color: ${({ theme, $isSelected, $color }) =>
    $isSelected ? theme.colors[$color] : theme.colors.textSecondary};
  cursor: ${({ $isSelected }) => ($isSelected ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  pointer-events: ${({ $isSelected }) => ($isSelected ? "none" : "auto")};

  ${({ $isSelected, $color, theme }) =>
    !$isSelected &&
    `
    &:hover {
      ${DropdownCircle} {
        display: inline-block;
        background: ${theme.colors[$color]};
      }
    }
  `};

  ${({ $isSelected, $color, theme }) =>
    $isSelected &&
    `
    &:hover {
      ${DropdownCircle} {
        display: inline-block;
        background: ${theme.colors[$color]};
      }
    }
  `};
`;

export const DropdownCircle = styled.span`
  width: 7px;
  height: 7px;
  display: none;
  ${RoundedFull};
`;
