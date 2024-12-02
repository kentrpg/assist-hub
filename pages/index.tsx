import {Header, Main, Footer} from "@/components/layout";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${ ({ theme }) => theme.colors.white };
`;

export default function Home() {
  return(
    <Wrapper>
      {/* <Header />
      <Main />
      <Footer /> */}
    </Wrapper>
  );
}
