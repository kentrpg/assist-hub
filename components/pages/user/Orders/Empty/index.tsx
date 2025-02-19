import React from "react";
import { Container, Title } from "./styled";
import { userEmpty } from "@/constants/imagePath";

const Empty: React.FC = () => {
  return (
    <Container>
      <img {...userEmpty} width={280} height={280} />
      <Title>尚未有任何訂單</Title>
    </Container>
  );
};

export default Empty;
