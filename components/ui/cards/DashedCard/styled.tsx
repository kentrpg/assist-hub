import styled from "styled-components";
import { CardRadius } from "@/styles/borderRadius";
import { SecondaryIconButton } from "@/styles/link";
import { StretchedLink } from "@/components/ui/StretchedLink";
import { Tablet } from "@/styles/container";

export const YellowDashedCard = styled.div`
  position: relative;
  grid-row: span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  ${CardRadius};
  background-color: ${({ theme }) => theme.colors.white};
  background-image: ${({ theme }) => `repeating-linear-gradient(
      -4deg,
      ${theme.colors.secondary},
      ${theme.colors.secondary} 10px,
      transparent 10px,
      transparent 20px,
      ${theme.colors.secondary} 20px
    ),
    repeating-linear-gradient(
      86deg,
      ${theme.colors.secondary},
      ${theme.colors.secondary} 10px,
      transparent 10px,
      transparent 20px,
      ${theme.colors.secondary} 20px
    ),
    repeating-linear-gradient(
      176deg,
      ${theme.colors.secondary},
      ${theme.colors.secondary} 10px,
      transparent 10px,
      transparent 20px,
      ${theme.colors.secondary} 20px
    ),
    repeating-linear-gradient(
      266deg,
      ${theme.colors.secondary},
      ${theme.colors.secondary} 10px,
      transparent 10px,
      transparent 20px,
      ${theme.colors.secondary} 20px
    )`};
  background-size: 1px 100%, 100% 1px, 1px 100%, 100% 1px;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat;
  padding: 60px 10px;

  @media ${Tablet} {
    padding: 0;
  }
`;

export const ActionButton = styled(SecondaryIconButton)`
  ${StretchedLink};
`;
