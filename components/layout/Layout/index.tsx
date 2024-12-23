import Header from "../Header";
import Footer from "../Footer";
import { PageLayout, MainContent } from "./styled";

type LayoutProps = {
  children: React.ReactNode;
  className: string;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <PageLayout>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageLayout>
  );
}
