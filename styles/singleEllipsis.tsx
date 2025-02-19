import { css } from "styled-components";

export const singleEllipsis = (lines: number = 1) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lines};
  overflow: hidden;
  text-overflow: ellipsis;
`;
