import styled from "styled-components";
import { ColorsType, FontSize, Padding } from "@/types/uiProps";
import {
  InputFieldCleanAutofill,
  InputFieldShadow,
  InputFieldTransition,
} from "@/styles/effect";
import { InputRadius } from "@/styles/borderRadius";

type InputFieldProps = FontSize &
  Padding & {
    $color: ColorsType;
    $borderColor: ColorsType;
    $backgroundColor: ColorsType;
  };

export const InputField = styled.input<InputFieldProps>`
  width: 100%;
  font-size: ${({ $fontSize }) => $fontSize}px;
  border: 1px solid ${({ theme, $borderColor }) => theme.colors[$borderColor]};
  ${InputRadius};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};
  color: ${({ theme, $color }) => theme.colors[$color]};
  ${InputFieldTransition}
  padding: ${({ $padding }) => $padding};

  &:-webkit-autofill {
    ${InputFieldCleanAutofill}
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    ${InputFieldShadow}
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
