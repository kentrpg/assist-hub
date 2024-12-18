import styled from "styled-components";
import { FaLine, FaFacebookSquare } from "react-icons/fa";

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  overflow: hidden;
  width: 20px;
  height: 20px;
`;

export const StyledFaLine = styled(FaLine)`
  vertical-align: top;
  fill: #06c755;
`;

// export const StyledFaFacebook = styled(FaFacebookSquare)`
//   vertical-align: top;
//   fill: #3b579d;
//   background-color: white;
// `;

export const StyledFaFacebook = styled(FaFacebookSquare)`
  fill: #3b579d;
`;
