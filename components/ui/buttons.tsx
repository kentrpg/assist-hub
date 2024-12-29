import { ButtonRadius } from "@/styles/borderRadius";
import styled from "styled-components";

const InputButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  ${ButtonRadius};
  font-size: 18px;
  font-weight: 500;
  padding: 10.5px;

  &:disabled {
    opacity: 0.65;
    pointer-events: none;
  }
`;

export const AuthButton = styled(InputButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 30px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textprimary};
  }
`;

export const LineButton = styled(InputButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  outline: 1px solid ${({ theme }) => theme.colors.primary};
  margin: 8px 0;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
