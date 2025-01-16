import styled from "styled-components";
import { Desktop, Mobile, Tablet } from "./container";

export const MainWrapper = styled.div`
  padding: 40px 0;
  @media ${Tablet} {
    padding: 60px 0;
  }
  @media ${Desktop} {
    padding: 80px 0;
  }
`;

export const Wrapper120 = styled.div`
  height: 100%;
  align-content: center;
  padding: 40px 0;
  @media ${Mobile} {
    padding: 60px 0;
  }
  @media ${Tablet} {
    padding: 80px 0;
  }
`;

export const Wrapper100 = styled.div`
  padding: 100px 0;
`;

export const Wrapper60 = styled.div`
  padding: 20px 0;
  @media ${Tablet} {
    padding: 40px 0;
  }
  @media ${Desktop} {
    padding: 60px 0;
  }
`;

export const Wrapper20 = styled.div`
  padding: 20px 0;
`;
