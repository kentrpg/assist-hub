import React from "react";
import { Container, Title } from "./styled";

const Empty:React.FC = () => {
  return (
    <Container>
      <img src="/images/Empty.svg" alt="" width={280} height={280} />
      <Title>尚未有任何訂單</Title>
    </Container>
  );
};

export default Empty;
