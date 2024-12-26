import { DefaultTheme } from "styled-components";

export const buttonShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
export const buttonShadowTransition = "box-shadow 0.2s ease-in-out";
export const navBarShadow = "0 3px 5px rgba(0, 0, 0, 0.25)";
export const userContainerShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
export const inputFieldTransition =
  "box-shadow 0.13s ease-out, border-color 0.1s ease-in-out";

// TBD: 這邊不用函式，直接全部寫清楚不用再傳 props
export const inputFieldShadow = (theme: DefaultTheme) =>
  `0 0 0 1px ${theme.colors.primary}, ${cleanAutofill(theme.colors.gray[100])}
`;
export const cleanAutofill = (backgroundColor: string) =>
  `0 0 0 1000px ${backgroundColor} inset`;

export const buttonScale = "scale(0.9)";
