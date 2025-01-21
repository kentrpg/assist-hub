import {
  BaseButton,
  buttonGapSizes,
  buttonSizes,
  buttonVariants,
} from "@/components/ui/buttons/Layout";
import NextLink from "next/link";
import styled from "styled-components";
import { HstackLayout } from "./flex";

export const InfoLink = styled(NextLink)`
  color: ${({ theme }) => theme.colors.info};
`;

export const UnderlineLink = styled(NextLink)`
  color: ${({ theme }) => theme.colors.info};
  text-decoration: underline;
  text-underline-offset: 3px;
  margin-left: 4px;
`;

export const PrimaryButton = styled(NextLink)`
  ${BaseButton};
  ${buttonVariants.primary};
  ${buttonSizes.xlarge};
`;

export const SecondaryButton = styled(NextLink)`
  ${BaseButton};
  ${buttonVariants.secondary};
  ${buttonSizes.xlarge};
`;

export const SecondaryIconButton = styled(NextLink)`
  ${BaseButton};
  ${HstackLayout}
  ${buttonGapSizes.large};
  ${buttonVariants.secondary};
`;

export const AccentButton = styled(NextLink)`
  display: flex;
  gap: 12px;
  ${BaseButton};
  ${buttonVariants.accent};
`;
