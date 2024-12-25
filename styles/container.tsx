import styled from "styled-components";

const breakpoints = {
  xxl: "1344px",
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: ${breakpoints.xxl}) {
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
