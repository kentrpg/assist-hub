import { colors } from "@/styles/theme";
import { css } from "styled-components";

export type IsDefault = {
  $isDefault?: boolean;
};

export type ColorsType = keyof typeof colors;

// for boolean status
export type IsActive = {
  $isActive: boolean;
};

export type IsCompleted = {
  $completed: boolean;
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

export type Margin = {
  $margin: string;
}

export type Padding = {
  $padding: string;
}