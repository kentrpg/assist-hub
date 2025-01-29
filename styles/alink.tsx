import { buttonGapSizes, buttonVariants } from "@/components/ui/buttons/Layout";
import styled from "styled-components";
import { ButtonRadius } from "./borderRadius";
import { Desktop } from "./container";
import { HstackLayout } from "./flex";

export const CartButton = styled.a`
  ${HstackLayout};
  ${buttonGapSizes.large};
  ${buttonVariants.secondary};
  ${ButtonRadius};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  padding: 13px;

  @media ${Desktop} {
    padding: 14px 33px;
  }
`;
