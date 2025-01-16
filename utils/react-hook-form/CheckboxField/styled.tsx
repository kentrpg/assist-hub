import { Tablet } from "@/styles/container";
import { CheckboxLabelFontSize } from "@/styles/typography";
import { Size, Gap, Color, CheckboxTextProps } from "@/types/uiProps";
import styled from "styled-components";

export const CheckboxGroup = styled.div<Gap>`
  display: flex;
  align-items: center;
  gap: 6px;
  @media ${Tablet} {
    gap: ${({ $gap }) => $gap}px;
  }
`;

export const CheckboxControl = styled.div<Size & Color>`
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

export const CheckboxText = styled.label<CheckboxTextProps>`
  color: ${({ theme, $color }) => theme.colors[$color]};
  ${({ theme, $isRequired }) =>
    $isRequired &&
    `&::after {
      content: '*';
      color: ${theme.colors.error};
    }
  `}
  ${CheckboxLabelFontSize};

  a:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;
