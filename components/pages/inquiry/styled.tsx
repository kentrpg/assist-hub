import {
  AccentButton as AccentButtonStyle,
  buttonSizes,
} from "@/components/ui/buttons/Layout";
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

export const AccentButton = styled(AccentButtonStyle)`
  ${buttonSizes.xlarge};
`;
