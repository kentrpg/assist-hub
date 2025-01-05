import { Tablet } from "@/styles/container";
import { CheckboxLabelFontSize } from "@/styles/typography";
import { Size, Gap, FontSize, ColorsType } from "@/types/uiProps";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";
import styled from "styled-components";

export type CheckboxLabelProps = FontSize & {
  $labelColor: ColorsType;
  required?: boolean;
};

export const CheckboxField = styled.div<Gap>`
  display: flex;
  align-items: center;
  gap: 6px;
  @media (${Tablet}) {
    gap: ${({ $gap }) => $gap}px;
  }
`;

export const CheckboxControl = styled.div<Size>`
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`;

export const VisuallyHiddenInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  color: ${({ theme, $labelColor }) => theme.colors[$labelColor]};
  ${({ theme, required }) =>
    required &&
    `&::after {
      content: '*';
      color: ${theme.colors.error};
    }
  `}
  ${CheckboxLabelFontSize};
`;

export const CheckedStateIcon = styled(MdCheckBox)<{
  $checkedIconColor: ColorsType;
}>`
  position: absolute;
  color: ${({ theme, $checkedIconColor }) => theme.colors[$checkedIconColor]};
`;

export const UncheckedStateIcon = styled(MdCheckBoxOutlineBlank)<{
  $uncheckedIconColor: ColorsType;
}>`
  position: absolute;
  color: ${({ theme, $uncheckedIconColor }) =>
    theme.colors[$uncheckedIconColor]};
`;
