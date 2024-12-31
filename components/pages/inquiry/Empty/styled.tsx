import styled from "styled-components";
import { PrimaryIconButton } from "@/components/ui/buttons";
import { Mobile } from "@/styles/container";

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 60px 0;
  @media (${Mobile}) {
    flex-direction: row;
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 12px;
  @media (${Mobile}) {
    flex-direction: column;
  }
`;

export const StepNumber = styled.div`
  width: 40px;
  height: 40px;
`;

export const StepImage = styled.img`
  max-width: 100%;
  height: 80px;
  order: 3;
  @media (${Mobile}) {
    order: inherit;
  }
`;

export const StepContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (${Mobile}) {
    /* flex: inherit; */
    flex-grow: 1;
    flex: 1 0 auto;
  }
`;

export const StepTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 8px;
`;

export const StepDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Button = styled(PrimaryIconButton)`
  padding: 10px 50px;
`;
