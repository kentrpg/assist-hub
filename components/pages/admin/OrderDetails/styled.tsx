import styled from "styled-components";
import {
  AdminInputFieldShadow,
  AdminInputFieldAutofill,
} from "@/styles/effect";
import { singleEllipsis } from "@/styles/singleEllipsis";
import { Color } from "@/types/uiProps";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.secondaryBg};
`;

export const Section = styled.section`
  padding: 18px 16px;
  background: ${({ theme }) => theme.colors.white};
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding-bottom: 8px;
`;

export const StaticText = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  ${AdminInputFieldShadow};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
  padding: 6px 12px;

  &:focus,
  &:hover {
    box-shadow: 0px 0px 0px 1.5px ${({ theme }) => theme.colors.primary};
  }

  &:-webkit-autofill {
    ${AdminInputFieldAutofill};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.border};
  }

  /* 隱藏 Chrome, Safari, Edge, Opera 預設上下箭頭 */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SelectGroup = styled.div`
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  ${AdminInputFieldShadow};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 6px 32px 6px 12px;

  &:focus,
  &:hover {
    box-shadow: 0px 0px 0px 1.5px ${({ theme }) => theme.colors.primary};
  }

  &:-webkit-autofill {
    ${AdminInputFieldAutofill};
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

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;

export const TextEndGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

export const TextLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;

export const TextValue = styled.span`
  ${singleEllipsis};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const GridRows2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  background: ${({ theme }) => theme.colors.white};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background: ${({ theme }) => theme.colors.secondaryBg};
`;

export const Tbody = styled.tbody`
  background: ${({ theme }) => theme.colors.white};
`;

export const Tr = styled.tr`
  font-size: 14px;
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
  }
`;

export const Td = styled.td`
  padding: 16px 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:first-child {
    padding-left: 24px;
  }

  &:last-child {
    padding-right: 24px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondaryBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const UserEmail = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CopyGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CopyButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s;
  padding: 12px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    background: ${({ theme }) => theme.colors.primary};
    cursor: not-allowed;
  }
`;
