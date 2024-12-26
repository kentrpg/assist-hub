import { css } from "styled-components";
import { Tablet } from "./container";

// 響應式樣式可以在 styled copmonent 做客製化覆蓋，或是延伸添加

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
    ${H3}
  }
`;
export const H6 = css`
  font-size: 20px;
  font-weight: 700;
`;
