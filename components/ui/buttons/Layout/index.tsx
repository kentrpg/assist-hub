import { ButtonRadius } from "@/styles/borderRadius";
import { ButtonDisabled, ButtonHoverTransition } from "@/styles/effect";
import { HstackLayout } from "@/styles/flex";
import styled, { css } from "styled-components";

// Button size variants for responsive design
export const buttonSizes = {
  small: css`
    padding: 5.5px 12px;
    font-size: 14px;
  `,
  medium: css`
    padding: 8px 16px;
    font-size: 16px;
  `,
  large: css`
    padding: 10px 20px;
    font-size: 18px;
  `,
  xlarge: css`
    padding: 10px 40px;
    font-size: 18px;
  `,
};

// Button gap size variants for icon button responsive design
export const buttonGapSizes = {
  small: css`
    ${buttonSizes.small};
    gap: 6px;
  `,
  medium: css`
    ${buttonSizes.medium};
    gap: 8px;
  `,
  large: css`
    ${buttonSizes.large};
    gap: 12px;
  `,
};

// Button color variants extended from BaseButton
export const buttonVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryHover};
    }
  `,
  accent: css`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.colors.accentHover};
    }
  `,
  accentSecondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryHover};
    }
  `,
};

export const BaseButton = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  ${ButtonRadius};
  ${buttonSizes.large};
  font-weight: 500;
  ${ButtonHoverTransition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    ${ButtonDisabled};
  }
`;

export const CtaButton = styled.button`
  ${BaseButton};
  ${buttonVariants.accent};
`;

export const CtaSecondaryButton = styled.button`
  ${BaseButton};
  ${buttonVariants.accentSecondary};
`;

export const PrimaryButton = styled.button`
  ${BaseButton};
  ${buttonVariants.primary};
`;

export const PrimaryIconButton = styled.button`
  ${BaseButton};
  ${HstackLayout}
  ${buttonGapSizes.large};
  ${buttonVariants.primary};
`;

export const SecondaryButton = styled.button`
  ${BaseButton};
  ${buttonVariants.secondary};
`;

export const SecondaryIconButton = styled.button`
  ${BaseButton};
  ${HstackLayout}
  ${buttonGapSizes.large};
  ${buttonVariants.secondary};
`;

export const AccentButton = styled.button`
  ${BaseButton};
  ${buttonVariants.accent};
`;

export const AccentIconButton = styled.button`
  ${BaseButton};
  ${HstackLayout}
  ${buttonGapSizes.large};
  ${buttonVariants.accent};
`;
