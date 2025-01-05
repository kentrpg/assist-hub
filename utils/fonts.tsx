import { Noto_Sans_TC } from "next/font/google";
import { css } from "styled-components";

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
