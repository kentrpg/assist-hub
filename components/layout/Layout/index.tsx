import Header from "../Header";
import Footer from "../Footer";
import { PageLayout, MainContent } from "./styled";

type LayoutProps = {
  children: React.ReactNode;
  isAuthenticated: boolean;
};

export default function Layout({ children, isAuthenticated }: LayoutProps) {
  return (
    <PageLayout>
      <Header isAuthenticated={isAuthenticated} />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageLayout>
  );
}
