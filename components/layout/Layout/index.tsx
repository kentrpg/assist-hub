import Header from "../Header";
import Footer from "../Footer";
import { LayoutWrapper } from "./styled";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </>
  );
}
