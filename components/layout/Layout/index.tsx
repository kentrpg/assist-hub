import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageLayout, MainContent } from "./styled";
import { LayoutProps } from "./data";
export default function Layout({
  children,
  isAuthenticated,
  isLoading,
}: LayoutProps) {
  return (
    <PageLayout>
      <Header isAuthenticated={isAuthenticated} isLoading={isLoading} />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageLayout>
  );
}
