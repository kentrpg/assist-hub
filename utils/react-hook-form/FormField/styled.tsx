import styled from "styled-components";
import { InputFieldProps } from "./index";

export const InputWrapper = styled.div`
  position: relative;
  margin: 12px 0;

  input:focus + label,
  :not(:placeholder-shown) + label {
    top: 0;
    left: 12px;
    font-size: 16px;
    padding: 0 6.5px;
  }
`;

export const InputField = styled.input<InputFieldProps>`
  width: 100%;
  padding: 16px 16px;
  font-size: 16px;
  border: 1px solid #e9e5de;
  border-radius: 8px;
  /* border-color: ${({ $isError, $isValid, theme }) =>
    $isError
      ? theme.colors.error
      : $isValid
      ? theme.colors.success
      : theme.colors.border}; */
  outline: none;

  &:focus {
    border-color: #1e3a8a;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.15s ease-in-out;
  pointer-events: none;
`;
