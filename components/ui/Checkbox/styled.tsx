import { ThemeColors, Number, ScaleColors } from "@/types/uiProps";
import {
  MdCheckBox as MdCheckBoxIcon,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";
import styled, { css } from "styled-components";

export const CheckboxField = styled.div<Pick<Number, "$gap">>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap}px;
`;

export const CheckboxControl = styled.div<Pick<Number, "$size">>`
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

export const CheckboxLabel = styled.label<
  Pick<Number, "$fontSize"> & { $labelColor: ScaleColors | ThemeColors }
>`
  font-size: ${({ $fontSize }) => $fontSize}px;
  color: ${({ theme, $labelColor }) =>
    typeof $labelColor === "string"
      ? theme.colors[$labelColor]
      : theme.colors[$labelColor.color][$labelColor.scale]};
  user-select: none;
`;

const baseCheckbox = ($iconColor: ScaleColors | ThemeColors) => css`
  position: absolute;
  color: ${typeof $iconColor === "string"
    ? ({ theme }) => theme.colors[$iconColor]
    : ({ theme }) => theme.colors[$iconColor.color][$iconColor.scale]};
`;

export const CheckedStateIcon = styled(MdCheckBoxIcon)<{
  $checkedIconColor: ScaleColors | ThemeColors;
}>`
  ${({ $checkedIconColor }) => baseCheckbox($checkedIconColor)}
`;

export const UncheckedStateIcon = styled(MdCheckBoxOutlineBlank)<{
  $uncheckedIconColor: ScaleColors | ThemeColors;
}>`
  ${({ $uncheckedIconColor }) => baseCheckbox($uncheckedIconColor)}
`;
