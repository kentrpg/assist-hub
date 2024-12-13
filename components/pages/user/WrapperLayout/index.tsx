import { ReactNode } from "react";
import { MainWrapper } from "@/styles/wrappers";

interface WrapperLayoutProps {
  children: ReactNode;
}

const WrapperLayout = ({ children }: WrapperLayoutProps) => {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  );
};

export default WrapperLayout;
