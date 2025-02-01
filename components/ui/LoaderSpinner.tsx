import { RoundedFull } from "@/styles/borderRadius";
import { ColorsType } from "@/types/uiProps";
import styled from "styled-components";

export const LoaderSpinner = styled.div<{ $color?: ColorsType }>`
  height: 22.5px;
  width: 22.5px;
  border: 1px solid
    ${({ theme, $color }) =>
      $color ? theme.colors[$color] : theme.colors.textPrimary};
  ${RoundedFull};
  border-top: none;
  border-right: none;
  animation: spin 1s ease-in-out infinite;
`;
