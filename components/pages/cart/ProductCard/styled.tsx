import { H1 } from "@/styles/typography";
import styled from "styled-components";

export const Title = styled.h1`
  ${H1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 10px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 0;
`;
