import { IsDefault } from "@/types/uiProps";
import styled from "styled-components";

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
`;

export const PasswordErrorMessage = styled.span<IsDefault>`
  color: ${({ $isDefault, theme }) =>
    $isDefault ? theme.colors.textMuted : theme.colors.error};
  font-size: 12px;
  margin-top: 4px;
`;
