import styled from "styled-components";
import { CardRadius } from "@/styles/borderRadius";
import { MdCheckCircle } from "react-icons/md";
import { Mobile } from "@/styles/container";
import {
  ColorTransition,
  InputOutline,
  InputOutlineHover,
  OutlineColorTransition,
} from "@/styles/effect";

export const PaymentOptionInput = styled.input`
  opacity: 0;
  position: absolute;
`;

export const CheckedStateIcon = styled(MdCheckCircle)`
  color: ${({ theme }) => theme.colors.grey100};
  font-size: 24px;
  ${ColorTransition};
`;

export const PaymentOptionField = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  ${CardRadius};
  ${InputOutline};
  padding: 12px 16px;
  @media ${Mobile} {
    padding: 16px 24px;
  }

  ${InputOutlineHover};

  &:has(${PaymentOptionInput}:checked) {
    outline-color: ${({ theme }) => theme.colors.primary};
    outline-width: 2px;

    ${CheckedStateIcon} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
