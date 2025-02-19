import React from "react";
import { Container, Title } from "./styled";
import { userEmpty } from "@/constants/imagePath";

const Empty = () => {
  return (
    <Container>
      <img {...userEmpty} width={280} height={280} />
      <Title>尚未有任何詢問單</Title>
    </Container>
  );
};

export default Empty;
