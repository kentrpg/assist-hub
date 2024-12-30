import { colors } from "@/styles/theme";

export type IsDefault = {
  $isDefault?: boolean;
};

export type ColorsType = keyof typeof colors;

// styled component prop

export type Color = {
  $color: ColorsType;
}

export type Gap = {
  $gap: number;
};

export type Size = {
  $size: number;
}

export type FontSize = {
  $fontSize: number;
}

export type BorderRadius = {
  $borderRadius: number;
}

export type Padding = {
  $padding: string;
}