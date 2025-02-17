import { ButtonRadiusSmall } from "@/styles/borderRadius";
import { Desktop, Mobile, Tablet } from "@/styles/container";
import { VstackLayout } from "@/styles/flex";
import type { IsActive } from "@/types/uiProps";
import styled, { keyframes } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const TabsMenu = styled.div`
  position: relative;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;

  @media ${Tablet} {
    max-width: 432px;
  }
`;

export const TabButton = styled.button<IsActive>`
  position: relative;
  ${ButtonRadiusSmall};
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${({ $isActive, theme }) =>
    $isActive &&
    `
      color: ${theme.colors.white};
      transition-delay: 0s;
  `};
  transition: color 0.15s ease;
  transition-delay: 0.1s;
  z-index: 1;
  padding: 12px 10px;

  ${({ $isActive, theme }) =>
    !$isActive &&
    `
    &:hover {
      background-color: ${theme.colors.primaryHover}15;
      color: ${theme.colors.primaryHover};
      transition-delay: 0s;
    }
  `}

  @media ${Mobile} {
    padding: 16px 10px;
  }
`;

export const Marker = styled.div`
  position: absolute;
  width: 100%;
  height: 56px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  ${ButtonRadiusSmall};
  background-color: ${({ theme }) => theme.colors.primaryActive};
  transition: transform 0.2s ease-in-out;
  pointer-events: none;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TabContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 16px;
  max-width: 50%;

  @media ${Tablet} {
    max-width: inherit;
  }
`;

export const Group = styled.div`
  ${VstackLayout};
  gap: 48px;
  animation: ${fadeIn} 0.3s ease-in-out;
  will-change: opacity, transform;
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textMuted};
`;
