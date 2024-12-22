export type IsDefault = {
  $isDefault?: boolean;
};

export type ThemeColors =
  | "primary"
  | "primaryBg"
  | "primaryLight"
  | "textprimary"
  | "secondary"
  | "seccondaryLight"
  | "secondaryBg"
  | "accent"
  | "accentLight"
  | "textsecondary"
  | "textMuted"
  | "white"
  | "black"
  | "error"
  | "success"
  | "border"
  | "info"
  | "gray['100']"
  | "gray['200']"
  | "gray['300']"
  ;

// Number 內所有 key 限定用於 CSS 樣式所需之數字屬性  
export type Number = {
  gap: number;
  size: number;
  fontSize: number;
  borderRadius: number;
};