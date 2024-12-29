import { FloatingLabelRadius } from "@/styles/borderRadius";
import {
  FloatingLabelShadow,
  FloatingLabelTransition,
  InputFieldTransition,
} from "@/styles/effect";
import styled from "styled-components";

export const FloatingLabelWrapper = styled.div`
  position: relative;
  margin-top: 12px;

  input:focus + label,
  :not(:placeholder-shown) + label {
    top: 0;
    left: 12px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
    padding: 0 6.5px;
  }
`;

export const FloatingLabel = styled.input`
  width: 100%;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  ${FloatingLabelRadius};
  outline: none;
  ${InputFieldTransition};
  padding: 11px 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    ${FloatingLabelShadow};
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
  ${FloatingLabelTransition};
  pointer-events: none;
`;

export const PasswordInputField = styled(FloatingLabel)`
  padding: 11px 40px 11px 16px;
`;
