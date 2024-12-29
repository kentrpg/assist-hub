import styled, { css } from "styled-components";

const flexBase = css`
  display: flex;
`;

export const FlexAlignCenter = styled.div`
  ${flexBase};
  justify-content: center;
`;

export const FlexAlignEnd = styled.div`
  ${flexBase};
  justify-content: end;
`;
