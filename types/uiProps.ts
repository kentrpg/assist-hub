import { colors } from "@/styles/theme";

export type IsDefault = {
  $isDefault?: boolean;
};

export type ColorsType = keyof typeof colors;

export type NestedColorValue = {
  key: ColorsType;
  nested?: string;
};

export type GrayKey = keyof typeof colors.gray;
export type ScaleColors = {
  color: ColorsType;
  scale?: GrayKey;
}

// styled component prop

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