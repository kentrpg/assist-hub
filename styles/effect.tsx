import { css } from "styled-components";

export const NavBarShadow = css`
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
`;

export const UserContainerShadow = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

// Link
export const NavLinkHover = css`
  transition: color 0.2s;
`;

// Input
export const CleanAutofill = css`
  box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.white} inset;
`;

export const InputFieldTransition = css`
  transition: box-shadow 0.13s ease-out, border-color 0.1s ease-in-out;
`;

export const InputFieldCleanAutofill = css`
  box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.grey100} inset;
`;

export const InputFieldShadow = css`
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary},
    0 0 0 1000px ${({ theme }) => theme.colors.grey100} inset;
`;

export const FloatingLabelShadow = css`
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary},
    0 0 0 1000px ${({ theme }) => theme.colors.white} inset;
`;

export const FloatingLabelTransition = css`
  transition: all 0.15s ease-in-out;
`;

// Button
export const ButtonScaleDown = css`
  transform: scale(0.9);
`;

export const ButtonScaleUp = css`
  transform: scale(1.1);
`;

export const ButtonShadow = css`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const QuickMatchButtonShadow = css`
  box-shadow: 0px 2px 8px rgba(236, 99, 64, 0.5),
    0px 0px 0px rgba(236, 99, 64, 0.19);
`;

export const QuickMatchButtonTransition = css`
  transition: transform 0.2s ease-in-out;
`;

export const ButtonHoverTransition = css`
  transition: background-color 0.15s;
`;

export const ButtonShadowTransition = css`
  transition: box-shadow 0.2s ease-in-out;
`;

export const ButtonDisabled = css`
  opacity: 0.65;
  pointer-events: none;
  /* cursor: not-allowed; */
`;
