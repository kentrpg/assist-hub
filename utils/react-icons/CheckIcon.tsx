import { MdCheck } from "react-icons/md";
import styled from "styled-components";

export const CheckIcon = styled(MdCheck)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;
