import { ReactNode } from "react";
import { Container } from "./styled";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
