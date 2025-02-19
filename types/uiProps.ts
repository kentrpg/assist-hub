import { colors } from "@/styles/theme";
import { css } from "styled-components";

export type IsDefault = {
  $isDefault?: boolean;
};

export type ColorsType = keyof typeof colors;

export type CheckboxTextProps = FontSize &
  Color & {
    $isRequired?: boolean;
};

// for boolean status
export type IsActive = {
  $isActive: boolean;
};

export type IsCompleted = {
  $completed: boolean;
};

export type IsDisabled = {
  $isDisabled: boolean;
};

export type IsOpen = {
  $isOpen: boolean;
};

// styled component prop

export type Autofill = {
  $autofill?: ReturnType<typeof css>;
};

export type Shadow = {
  $shadow?: ReturnType<typeof css>;
};

export type Color = {
  $color: ColorsType;
};

export type BgColor = {
  $bgColor: ColorsType;
};

export type Gap = {
  $gap: number;
};

export type Size = {
  $size: number;
};

export type FontSize = {
  $fontSize: number;
};

export type BorderRadius = {
  $borderRadius: number;
};

export type Margin = {
  $margin: string;
};

export type Padding = {
  $padding: string;
};

export type Toast = {
  $type: "success" | "error";
  $isLeaving: boolean;
  $top: string;
  $right: string;
};

export type Offset = {
  $offset: string;
};
