import { InputRadius, RoundedFull } from "@/styles/borderRadius";
import { Color, BgColor, IsCompleted } from "@/types/uiProps";
import styled from "styled-components";
import NextLink from "next/link";

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
  color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.colors.textMuted : theme.colors.textSecondary};
  background: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.colors.white : theme.colors.accentLight};
  transition: opacity 0.1s ease-in-out;
  &:hover {
    background: ${({ $isCompleted, theme }) =>
      $isCompleted ? theme.colors.primaryLight : theme.colors.accentLight};
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
`;

export const Link = styled(NextLink)`
  display: block;
  &:hover {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
  }
`;

export const Completed = styled.span<IsCompleted>`
  color: ${({ theme, $completed }) =>
    $completed ? theme.colors.textMuted : theme.colors.error};
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
