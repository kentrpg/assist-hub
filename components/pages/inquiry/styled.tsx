import { PrimaryButton, buttonSizes } from "@/components/ui/buttons/Layout";
import { Desktop, Tablet } from "@/styles/container";
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

export const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 0px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textMuted};

  &:hover {
    color: ${({ theme }) => theme.colors.grey200};
  }

  @media ${Desktop} {
    top: 8px;
    right: 9px;
  }
`;

export const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  margin: 20px 0;

  & > * {
    height: 100%;
    display: flex;
  }

  & > div > div {
    flex: 1;
  }

  @media ${Tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const AccentButton = styled(PrimaryButton)`
  ${buttonSizes.xlarge};
`;
