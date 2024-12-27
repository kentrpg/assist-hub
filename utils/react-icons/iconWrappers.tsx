import styled, { css } from "styled-components";
import Link from "next/link";
import { BorderRadius, ColorsType, Size } from "@/types/uiProps";

type IconBackground = Size & BorderRadius & { $backgroundColor: ColorsType };
const iconBackground = css<IconBackground>`
  width: ${({ $size }) => $size - 4}px;
  height: ${({ $size }) => $size - 4}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  overflow: hidden;
`;

export const IconWrapper = styled.span<IconBackground>`
  ${iconBackground}
`;

export const IconLinkWrapper = styled(Link)<IconBackground>`
  ${iconBackground}
  &:hover {
    opacity: 0.8;
  }
`;
