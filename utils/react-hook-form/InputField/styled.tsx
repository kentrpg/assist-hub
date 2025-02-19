import styled, { css } from "styled-components";
import {
  ColorsType,
  FontSize,
  Padding,
  Color,
  Autofill,
  Shadow,
} from "@/types/uiProps";
import {
  FooterAutofill,
  InputOutline,
  OutlineColorTransition,
} from "@/styles/effect";
import { InputRadius } from "@/styles/borderRadius";

type InputFieldProps = FontSize &
  Padding &
  Color &
  Autofill &
  Shadow & {
    $borderColor: ColorsType;
    $backgroundColor: ColorsType;
  };

export const BaseInputStyled = css`
  width: 100%;
  ${InputRadius};
  ${OutlineColorTransition};
  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterInputStyled = css`
  color: ${({ theme }) => theme.colors.grey300};
  ${InputOutline};
  outline: 1px solid ${({ theme }) => theme.colors.grey300};
  background-color: ${({ theme }) => theme.colors.grey100};
  font-size: 14px;
  padding: 7px 34px 7px 10px;

  &:-webkit-autofill {
    ${FooterAutofill};
  }
`;

export const CheckoutInputField = styled.input`
  ${BaseInputStyled};
  color: ${({ theme }) => theme.colors.textSecondary};
  ${InputOutline};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: 16px;
  padding: 12px 16px;
`;

export const InputFieldStyle = styled.input`
  ${BaseInputStyled};
  ${FooterInputStyled};
`;

export const InputField = styled.input<InputFieldProps>`
  width: 100%;
  font-size: ${({ $fontSize }) => $fontSize}px;
  outline: 1px solid ${({ theme, $borderColor }) => theme.colors[$borderColor]};
  ${InputRadius};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};
  color: ${({ theme, $color }) => theme.colors[$color]};
  ${OutlineColorTransition};
  padding: ${({ $padding }) => $padding};

  &:-webkit-autofill {
    ${({ $autofill }) => $autofill};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ $fontSize }) => $fontSize}px;
    font-weight: 400;
  }
`;
