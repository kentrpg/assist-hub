import {Header, Footer} from "@/components/layout";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${ ({ theme }) => theme.colors.white };
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        { children}
      </Wrapper>
      <Footer />
    </>
  )
}