import { Desktop, Tablet } from "@/styles/container";
import { VstackLayout } from "@/styles/flex";
import type { IsActive } from "@/types/uiProps";
import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 0;
  @media (${Desktop}) {
    padding: 0 90px;
  }
`;

export const TabsMenu = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
  @media (${Tablet}) {
    max-width: 366px;
  }
`;

export const TabButton = styled.button<IsActive>`
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primaryActive : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.textPrimary};
  padding: 16.5px 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const TabContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 16px;
  max-width: 50%;
  @media (${Tablet}) {
    max-width: inherit;
  }
`;

export const Group = styled.div`
  ${VstackLayout};
  gap: 48px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textMuted};
`;
