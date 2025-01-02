import { CartStepCompleted, circularSizes } from "@/components/ui/circulars";
import { Mobile } from "@/styles/container";
import type { IsCompleted } from "@/types/uiProps";
import { MdChevronRight } from "react-icons/md";
import styled from "styled-components";

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (${Mobile}) {
    gap: 12px;
  }
`;

export const CircularNmberStyle = styled.div<IsCompleted>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ $completed, theme }) =>
    $completed ? theme.colors.primary : theme.colors.textMuted};
`;

export const Number = styled(CartStepCompleted)<IsCompleted>`
  background-color: ${({ $completed, theme }) =>
  $completed ? theme.colors.primary : "#9CA3AF"};
  ${circularSizes.xsmall};
  @media (${Mobile}) {
    ${circularSizes.small};
  }
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Indicator = styled(MdChevronRight)`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 20px;
`;
