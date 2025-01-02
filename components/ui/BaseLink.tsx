import NextLink from "next/link";
import styled from "styled-components";

const BaseLink = styled(NextLink)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.info};
`;

export default BaseLink;
