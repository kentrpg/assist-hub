import { css } from "styled-components";
import { Tablet } from "./container";
import { Noto_Sans_TC } from "next/font/google";

// 響應式樣式可以在 styled copmonent 做客製化覆蓋，或是延伸添加

// Regular 400、Medium 500、Bold 700
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "700"],
});

export const FontFamily = css`
  font-family: ${notoSansTC.style.fontFamily}, system-ui, -apple-system,
    "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
`;

export const NotoSansTC = css`
  font-family: ${notoSansTC.style.fontFamily}, sans-serif;
`;

export const H1 = css`
  font-size: 40px;
  font-weight: 500;
`;
export const H2 = css`
  font-size: 36px;
  font-weight: 700;
`;
export const H3 = css`
  font-size: 32px;
  font-weight: 500;
`;
export const H4 = css`
  font-size: 28px;
  font-weight: 500;
`;
export const H5 = css`
  font-size: 24px;
  font-weight: 500;
  // @usage inquiry/styled.tsx -> Price component
  @media (${Tablet}) {
    ${H3};
  }
`;
export const H6 = css`
  font-size: 20px;
  font-weight: 700;
`;
