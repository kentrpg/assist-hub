import { RoundedFull } from "@/styles/borderRadius";
import { Tablet } from "@/styles/container";
import {
  ButtonScaleDown,
  ButtonShadow,
  ButtonShadowTransition,
} from "@/styles/effect";
import { H5, H6 } from "@/styles/typography";
import styled, { css } from "styled-components";

// Circular size variants for responsive design
export const circularSizes = {
  xsmall: css`
    width: 16px;
    height: 16px;
  `,
  small: css`
    width: 24px;
    height: 24px;
  `,
  medium: css`
    width: 40px;
    height: 40px;
  `,
  large: css`
    width: 65px;
    height: 65px;
  `,
  extraLarge: css`
    width: 80px;
    height: 80px;
  `,
};

const BaseCircularButton = css`
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  ${circularSizes.medium};
  ${RoundedFull};
  ${ButtonShadowTransition};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const TabBackButton = styled.button`
  ${BaseCircularButton};
  ${circularSizes.small};

  &:hover {
    ${ButtonShadow};
  }

  &:active {
    ${ButtonScaleDown};
  }
`;

export const PageBackButton = styled.button`
  ${BaseCircularButton};
  ${circularSizes.medium};

  &:hover {
    ${ButtonShadow};
  }

  &:active {
    ${ButtonScaleDown};
  }
`;

export const DashedCircle = styled.button`
  ${BaseCircularButton};
  ${circularSizes.large};
  border: 1px dashed ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${H5};
  @media (${Tablet}) {
    ${circularSizes.extraLarge};
  }
`;

export const InquiryStepCircle = styled.span`
  ${BaseCircularButton};
  ${circularSizes.medium};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.textSecondary};
  ${H6};
`;

const CartStep = styled.span`
  ${BaseCircularButton};
  ${circularSizes.small};
  background-color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
`;

export const CartStepPending = styled(CartStep)`
  background-color: ${({ theme }) => theme.colors.textMuted};
`;

export const CartStepCompleted = styled(CartStep)`
  background-color: ${({ theme }) => theme.colors.primary};
`;
