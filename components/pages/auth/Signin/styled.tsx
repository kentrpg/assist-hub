import styled from "styled-components";

export const Remember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ForgotPasswordLink = styled.button`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.info};
  background: transparent;
`;
