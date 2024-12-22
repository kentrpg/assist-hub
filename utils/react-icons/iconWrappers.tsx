import styled, { css } from "styled-components";
import Link from "next/link";
import { ThemeColors, Number } from "@/types/uiProps";

const iconBackground = css<
  Pick<Number, "size"> &
    Pick<Number, "borderRadius"> & { backgroundColor: ThemeColors }
>`
  width: ${({ size }) => size - 4}px;
  height: ${({ size }) => size - 4}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  overflow: hidden;
`;

export const IconWrapper = styled.span<
  Pick<Number, "size"> &
    Pick<Number, "borderRadius"> & { backgroundColor: ThemeColors }
>`
  ${iconBackground}
`;

export const IconLinkWrapper = styled(Link)<
  Pick<Number, "size"> &
    Pick<Number, "borderRadius"> & { backgroundColor: ThemeColors }
>`
  ${iconBackground}
  &:hover {
    opacity: 0.8;
  }
`;
