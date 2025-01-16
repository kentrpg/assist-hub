import styled from "styled-components";
import { Mobile, Tablet } from "./container";

export const MainWrapper = styled.div`
  padding: 80px 0;
`;

export const Wrapper100 = styled.div`
  padding: 100px 0;
`;

export const Wrapper120 = styled.div`
  height: 100%;
  align-content: center;
  padding: 40px 0;
  @media (${Mobile}) {
    padding: 60px 0;
  }
  @media (${Tablet}) {
    padding: 80px 0;
  }
`;

export const Wrapper100 = styled.div`
  padding: 100px 0;
`;

export const Wrapper70 = styled.div`
  padding: 70px 0;
`;
