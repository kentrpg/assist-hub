import styled from "styled-components";

const breakpoints = {
  sm: "576px",
  md: "768px",
  l: "1024px",
  xl: "1344px",
};

export const ExtraLarge = `min-width: ${breakpoints.xl}`;
export const Desktop = `min-width: ${breakpoints.l}`;
export const Tablet = `min-width: ${breakpoints.md}`;
export const Mobile = `min-width: ${breakpoints.sm}`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  @media (${ExtraLarge}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Container1344 = styled(Container)`
  max-width: 1344px;
`;

export const Container1116 = styled(Container)`
  max-width: 1116px;
`;

export const Container432 = styled(Container)`
  max-width: 432px;
`;
