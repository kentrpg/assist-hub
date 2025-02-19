import { InputRadius } from "@/styles/borderRadius";
import { AdminInputFieldAutofill } from "@/styles/effect";
import { BgColor, Color, IsCompleted } from "@/types/uiProps";
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

export const TdCompleted = styled.div<IsCompleted>`
  opacity: ${({ $completed }) => ($completed ? 0.4 : 1)};
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
    padding: 0 6px;
    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    svg {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const SelectGroup = styled.div`
  position: relative;
  width: 100px;
`;

export const Select = styled.select`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 6px 32px 6px 12px;
  box-shadow: 0px 0px 0px 1.5px ${({ theme }) => theme.colors.grey100};
  ${InputRadius};

  &:focus,
  &:hover {
    box-shadow: 0px 0px 0px 1.5px ${({ theme }) => theme.colors.primary};
  }

  &:-webkit-autofill {
    ${AdminInputFieldAutofill};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SelectArrowIcon = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.textMuted};
`;
