import NextLink from "next/link";
import styled from "styled-components";

export const InfoLink = styled(NextLink)`
  color: ${({ theme }) => theme.colors.info};
`;

export const UnderlineLink = styled(NextLink)`
  color: ${({ theme }) => theme.colors.info};
  text-decoration: underline;
  text-underline-offset: 3px;
  margin-left: 4px;
`;
