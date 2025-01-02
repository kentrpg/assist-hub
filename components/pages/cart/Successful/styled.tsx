import { buttonSizes, SecondaryButton as SecondaryButtonStyle, PrimaryButton as PrimaryButtonStyle } from "@/components/ui/buttons";
import { FlexAlignCenter } from "@/styles/flex";
import { Title5 } from "@/styles/typography";
import { MdPriceCheck } from "react-icons/md";
import styled from "styled-components";

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 120px 0;
`;

export const Title = styled.h1`
  ${Title5};
  margin-bottom: 12px;
`;

export const SuccessIcon = styled(MdPriceCheck)`
  width: 90px;
  height: 90px;
  color: ${({ theme }) => theme.colors.success};
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Mark = styled.strong`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Group = styled(FlexAlignCenter)`
  gap: 24px;
`;

export const SecondaryButton = styled(SecondaryButtonStyle)`
  ${buttonSizes.xlarge};
`;

export const PrimaryButton = styled(PrimaryButtonStyle)`
  ${buttonSizes.xlarge};
`;
