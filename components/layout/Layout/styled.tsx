import styled from "styled-components";

export const PageLayout = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.primaryBg};
`;
