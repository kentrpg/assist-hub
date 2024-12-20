import styled from "styled-components";

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin: -8px 0 12px;
`;

export type InputFieldProps = {
  $isDefault?: boolean;
};

export const PasswordErrorMessage = styled.span<InputFieldProps>`
  color: ${({ $isDefault, theme }) =>
    $isDefault ? theme.colors.textMuted : theme.colors.error};
  font-size: 14px;
  margin: -8px 0 12px;
`;
