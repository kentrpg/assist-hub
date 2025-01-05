import { H1 } from "@/styles/typography";
import styled from "styled-components";

export const Title = styled.h1`
  ${H1};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 20px 0 30px;
`;
