import styled from "styled-components";
import { Tablet, Desktop, Mobile, ExtraLarge } from "@/styles/container";

export const FormContainer = styled.div`
  flex: 1;
  padding: 24px;
  border-radius: 10px;
  outline: 1px #888888 solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  @media (${ExtraLarge}) {
    padding: 48px;
  }
`;

export const Titile = styled.h5`
  font-size: 24px;
  font-weight: 500;
  color: #08204d;
  padding-left: 14px;
  border-left: 5px solid ${({ theme }) => theme.colors.textprimary};
  color: ${({ theme }) => theme.colors.textprimary};
  margin-bottom: 32px;
  display: none;
  @media (${Tablet}) {
    display: block;
  }
`;
