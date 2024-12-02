import {Header, Footer} from "@/components/layout";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      { children}
      <Footer />
    </>
  )
}