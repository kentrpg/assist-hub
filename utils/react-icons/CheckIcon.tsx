import { MdCheck } from "react-icons/md";
import styled from "styled-components";

export const InquiryCheck = styled(MdCheck)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SuggestCheck = styled(MdCheck)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.textMuted};
`;
