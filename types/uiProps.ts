import { colors } from "@/styles/theme";

export type IsDefault = {
  $isDefault?: boolean;
};

export type ColorsType = keyof typeof colors;

// for boolean status
// TBD: 對於相同 boolean status 的 component，是否可以用同一個 prop name？
export type IsActive = {
  $isActive: boolean;
};

export type IsCompleted = {
  $completed: boolean;
};

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