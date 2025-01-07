import styled from "styled-components";
import { Mobile } from "@/styles/container";
import { InputRadius } from "@/styles/borderRadius";

export const AddressWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

export const AddressField = styled.div`
  width: 100%;
  position: relative;

  select {
    width: 100%;
    padding: 12px 16px;
    padding-right: 40px;
    ${InputRadius};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 16px;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SelectArrowIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 1 100%;

  @media (${Mobile}) {
    flex: 1 1 auto;
  }

  ${AddressWrapper} > &:first-child {
    min-width: 65px;
    flex: 1;
  }
  ${AddressWrapper} > &:last-child {
    max-width: 100%;
    flex: 1 1 100%;
  }
`;

export const Label = styled.label<{ required?: boolean }>`
  font-size: 16px;
  ${({ theme }) =>
    `&::after {
      content: '*';
      color: ${theme.colors.error};
    }
  `}
`;
