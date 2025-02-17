import { ButtonRadiusSmall } from "@/styles/borderRadius";
import { Desktop, Mobile, Tablet } from "@/styles/container";
import { VstackLayout } from "@/styles/flex";
import type { IsActive, Offset } from "@/types/uiProps";
import styled, { keyframes } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media ${Tablet} {
    flex-direction: row;
    align-items: end;
    gap: 32px;
  }
`;

export const TabsMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  /* max-width: 100%; */
  width: 100%;

  @media ${Mobile} {
    max-width: 432px;
  }

  @media ${Tablet} {
    gap: 12px;
  }
`;

export const TabButton = styled.button<IsActive>`
  position: relative;
  ${ButtonRadiusSmall};
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${({ $isActive, theme }) =>
    $isActive &&
    `
      color: ${theme.colors.white};
      transition-delay: 0s;
  `};
  outline: 1.5px solid ${({ theme }) => theme.colors.primaryActive};
  transition: color 0.15s ease;
  transition-delay: 0.1s;
  z-index: 1;
  padding: 12px 10px;

  ${({ $isActive, theme }) =>
    !$isActive &&
    `
    @media (hover: hover) {
      &:hover {
        background-color: ${theme.colors.primaryHover}15;
        color: ${theme.colors.primaryHover};
        transition-delay: 0s;
      }
    }
  `}

  @media ${Tablet} {
    font-size: 16px;
    padding: 16px 10px;
  }
`;

export const Marker = styled.div<Offset>`
  position: absolute;
  width: 100%;
  height: 45px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  ${ButtonRadiusSmall};
  background-color: ${({ theme }) => theme.colors.primaryActive};
  transform: ${({ $offset }) => `translateY(${$offset})`};
  transition: all 0.2s ease-in-out;
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  pointer-events: none;

  @media ${Tablet} {
    height: 56px;
  }
`;

// export const Marker = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 45px;
//   top: 0;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   ${ButtonRadiusSmall};
//   background-color: ${({ theme }) => theme.colors.primaryActive};
//   transition: transform 0.2s ease-in-out;
//   pointer-events: none;

//   @media ${Tablet} {
//     height: 56px;
//   }
// `;

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
`;

export const Group = styled.div`
  ${VstackLayout};
  gap: 10px;
  animation: ${fadeIn} 0.3s ease-in-out;
  will-change: opacity, transform;

  @media ${Tablet} {
    gap: 48px;
  }
`;

export const Image = styled.img`
  width: 216px;
  height: 240px;
  object-fit: contain;

  @media ${Mobile} {
    width: 270px;
    height: 300px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};

  @media ${Tablet} {
    font-size: 16px;
  }
`;
