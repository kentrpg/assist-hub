import { ThemeColors, Number } from "@/types/uiProps";
import {
  MdCheckBox as MdCheckBoxIcon,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";
import styled, { css } from "styled-components";

export const Checkbox = styled.div<Pick<Number, "$gap">>`
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
  Pick<Number, "$fontSize"> & { $labelColor: ThemeColors }
>`
  font-size: ${({ $fontSize }) => $fontSize}px;
  color: ${({ $labelColor, theme }) => theme.colors[$labelColor]};
  user-select: none;
`;

const baseCheckbox = css<{ $checkboxIconColor: ThemeColors }>`
  position: absolute;
  color: ${({ $checkboxIconColor, theme }) => theme.colors[$checkboxIconColor]};
`;

export const CheckedStateIcon = styled(MdCheckBoxIcon)<{
  $checkboxIconColor: ThemeColors;
}>`
  ${baseCheckbox};
`;

export const UncheckedStateIcon = styled(MdCheckBoxOutlineBlank)<{
  $checkboxIconColor: ThemeColors;
}>`
  ${baseCheckbox};
`;
