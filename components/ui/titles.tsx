import styled from "styled-components";

export const PageTitleGroup = styled.div`
  text-align: center;
  padding: 20px 0 12px;
`;

export const PageTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const PageTitleDescription = styled.p`
  font-size: 18px;
  margin-top: 12px;
`;
