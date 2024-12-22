import styled from "styled-components";
import { Number, ScaleColors, ThemeColors } from "@/types/uiProps";

export const InputField = styled.input<
  Pick<Number, "$fontSize"> & {
    $color: ScaleColors | ThemeColors;
    $borderColor: ScaleColors | ThemeColors;
    $backgroundColor: ScaleColors | ThemeColors;
    $padding: string;
  }
>`
  width: 100%;
  font-size: ${({ $fontSize }) => $fontSize}px;
  line-height: 1.5;
  border: 1px solid
    ${({ theme, $borderColor }) =>
      typeof $borderColor === "string"
        ? theme.colors[$borderColor]
        : theme.colors[$borderColor.color][$borderColor.scale]};
  border-radius: 5px;
  background-color: ${({ theme, $backgroundColor }) =>
    typeof $backgroundColor === "string"
      ? theme.colors[$backgroundColor]
      : theme.colors[$backgroundColor.color][$backgroundColor.scale]};
  color: ${({ theme, $color }) =>
    typeof $color === "string"
      ? theme.colors[$color]
      : theme.colors[$color.color][$color.scale]};
  transition: box-shadow 0.13s ease-out, border-color 0.1s ease-in-out;
  padding: ${({ $padding }) => $padding};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary},
      0 0 0 1000px ${({ theme }) => theme.colors.gray["100"]} inset;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
