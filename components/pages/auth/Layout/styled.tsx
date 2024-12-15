import { Container432 } from "@/styles/container";
import styled from "styled-components";
import { InputFieldProps } from "../Register/data";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-top: -12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
`;

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

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin: -8px 0 12px;
`;

export const PasswordErrorMessage = styled.span<InputFieldProps>`
  color: ${({ $isError, $isValid, theme }) =>
    $isError
      ? theme.colors.error
      : $isValid
      ? theme.colors.success
      : theme.colors.textMuted};
  font-size: 14px;
  margin: -8px 0 12px;
`;

export const Container = styled(Container432)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const RememberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const TextMuted = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.muted};
  input {
    width: 18px;
    height: 18px;
    border-width: 2px; // 沒有作用
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.muted};
  }
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
