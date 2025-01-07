import styled from "styled-components";
import { CardRadius } from "@/styles/borderRadius";
import { SecondaryIconButton } from "@/components/ui/buttons/Layout";
import { StretchedLink } from "@/components/ui/StretchedLink";

export const YellowDashedCard = styled.div`
  position: relative;
  flex: 0 0 calc((100% - 2 * 24px) / 3);
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
`;

export const Button = styled(SecondaryIconButton)`
  ${StretchedLink};
`;
