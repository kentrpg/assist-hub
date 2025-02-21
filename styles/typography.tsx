import { css } from "styled-components";
import { Desktop, Tablet } from "./container";

export const H1 = css`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 28px;
  font-weight: 500;
  @media ${Tablet} {
    font-size: 36px;
  }
  @media ${Desktop} {
    font-size: 40px;
  }
`;
export const H2 = css`
  font-size: 28px;
  font-weight: 500;
  @media ${Tablet} {
    font-size: 36px;
    font-weight: 700;
  }
`;
export const H3 = css`
  font-size: 32px;
  font-weight: 500;
`;
export const H4 = css`
  font-weight: 500;
  font-size: 22px;
  @media ${Tablet} {
    font-size: 28px;
  }
`;
export const H5 = css`
  font-size: 24px;
  font-weight: 500;
`;
export const H6 = css`
  font-size: 20px;
  font-weight: 700;
`;

export const CheckboxLabelFontSize = css`
  font-size: 14px;
  @media ${Tablet} {
    font-size: 16px;
  }
`;
