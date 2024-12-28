import { css } from "styled-components";

export const ButtonShadow = css`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const ButtonShadowTransition = css`
  transition: box-shadow 0.2s ease-in-out;
`;
export const NavBarShadow = css`
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
`;
export const UserContainerShadow = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const InputFieldTransition = css`
  transition: box-shadow 0.13s ease-out, border-color 0.1s ease-in-out;
`;

export const CleanAutofill = css`
  box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.white} inset;
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

export const ButtonScale = css`transform: scale(0.9)`;
