import { H1 } from "@/styles/typography";
import { Wrapper20 } from "@/styles/wrappers";
import styled from "styled-components";

export const TitleGroup = styled(Wrapper20)`
  text-align: center;
`;

export const Title = styled.h1`
  ${H1};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TitleDescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 12px;
`;
