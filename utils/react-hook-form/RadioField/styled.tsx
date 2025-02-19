import { RadioSize } from "@/constants/iconSize";
import { Tablet } from "@/styles/container";
import { CheckboxLabelFontSize } from "@/styles/typography";
import styled from "styled-components";

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media ${Tablet} {
    gap: 8px;
  }
`;

export const RadioControl = styled.div`
  position: relative;
  width: ${RadioSize.regular}px;
  height: ${RadioSize.regular}px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AccessibleInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

export const RadioText = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  ${CheckboxLabelFontSize};
`;
