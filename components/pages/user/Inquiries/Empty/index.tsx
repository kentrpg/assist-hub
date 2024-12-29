import React from "react";
import { Container, Title } from "./styled";

const Empty = () => {
  return (
    <Container>
      <img src="/images/Empty.svg" alt="" width={280} height={280} />
      <Title>尚未有任何詢問單</Title>
    </Container>
  );
};

export default Empty;
