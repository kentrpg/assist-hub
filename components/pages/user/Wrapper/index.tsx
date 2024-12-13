import { ReactNode } from "react";
import { MainWrapper } from "@/styles/wrappers";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Wrapper;
