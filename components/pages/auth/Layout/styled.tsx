import { Container432 } from "@/styles/container";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-top: -12px;
`;

export const Container = styled(Container432)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 26px;
`;

export const FooterLinks = styled.div`
  text-align: center;
  font-size: 18px;
  a {
    margin-left: 4px;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;
