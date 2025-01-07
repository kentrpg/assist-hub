import {
  PrimaryButton,
  OutlineButton as BorderButton,
} from "@/components/ui/buttons/Layout";
import { Container432 } from "@/styles/container";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const Container = styled(Container432)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 28px;
`;

export const FooterLinks = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 8px;
`;

export const Button = styled(PrimaryButton)`
  margin-top: 30px;
`;

export const OutlineButton = styled(BorderButton)`
  margin-top: 8px;
`;
