import styled from "styled-components";

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin: -8px 0 12px;
`;

export type InputFieldProps = {
  $isError?: boolean;
  $isValid?: boolean;
};

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
