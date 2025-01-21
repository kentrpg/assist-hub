import { PrimaryButton, buttonSizes } from "@/components/ui/buttons/Layout";
import { Tablet } from "@/styles/container";
import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Assistive = styled.div`
  padding: 30px 0;
`;

export const ActionAssessment = styled.div`
  margin-bottom: 40px;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 40px;
`;

export const Card = styled.div`
  position: relative;
  flex: 0 0 calc((100% - 2 * 24px) / 3);
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 7px;
  font-size: 0px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textMuted};

  &:hover {
    color: ${({ theme }) => theme.colors.grey200};
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
  @media ${Tablet} {
    flex-direction: row;
  }
`;

export const AccentButton = styled(PrimaryButton)`
  ${buttonSizes.xlarge};
`;
