import styled from "styled-components";
import { Mobile } from "@/styles/container";
import { InputRadius } from "@/styles/borderRadius";
import { InputOutline } from "@/styles/effect";

export const AddressWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

export const AddressField = styled.div`
  width: 100%;
  position: relative;
`;

export const AddressFieldSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  padding-right: 40px;
  ${InputRadius};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
  ${InputOutline};
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

  @media ${Mobile} {
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

export const Label = styled.label<{ required: boolean }>`
  font-size: 16px;

  ${({ theme, required }) =>
    required &&
    `
    &::after {
      content: '*';
      color: ${theme.colors.error};
    }
    
    & {
      min-width: 72px;
    }
  `}
`;
