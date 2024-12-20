import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  flex-grow: 1;
  background-color: ${ ({ theme }) => theme.colors.white };
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}