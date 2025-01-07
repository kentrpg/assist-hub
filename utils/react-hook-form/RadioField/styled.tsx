import { Tablet } from "@/styles/container";
import { CheckboxLabelFontSize } from "@/styles/typography";
import { Size, Gap, FontSize, Color } from "@/types/uiProps";
import styled from "styled-components";

type RadioTextProps = FontSize & Color;

export const RadioGroup = styled.div<Gap>`
  display: flex;
  align-items: center;
  gap: 6px;
  @media (${Tablet}) {
    gap: ${({ $gap }) => $gap}px;
  }
`;

export const RadioControl = styled.div<Size & Color>`
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  svg {
    color: ${({ theme, $color }) => theme.colors[$color]};
  }
`;

export const AccessibleInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

export const RadioText = styled.label<RadioTextProps>`
  color: ${({ theme, $color }) => theme.colors[$color]};
  ${CheckboxLabelFontSize};
`;
