import styled, { css } from "styled-components";

export const FlexAlignCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const FlexAlignEnd = styled.div`
  display: flex;
  justify-content: end;
`;

export const HstackLayout = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const VstackLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
