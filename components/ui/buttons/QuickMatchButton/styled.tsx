import { RoundedFull } from "@/styles/borderRadius";
import {
  ButtonScaleUp,
  QuickMatchButtonShadow,
  QuickMatchButtonTransition,
} from "@/styles/effect";
import styled from "styled-components";
import { circularSizes } from "@/components/ui/circulars";
import { VstackLayout } from "@/styles/flex";

export const QuickMatchButtonStyle = styled.button`
  ${circularSizes.large};
  ${VstackLayout};
  ${RoundedFull};
  background: conic-gradient(
    from 0deg,
    #ff6f61 0%,
    #fdb813 20%,
    #ffeb3b 40%,
    #8bc34a 50%,
    #42a5f5 80%,
    #5c6bc0 90%,
    #ab47bc 95%,
    #c44bac 96%,
    #d84f9b 97%,
    #e8548a 98%,
    #f55979 99%,
    #ff6f61 100%
  );
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  ${QuickMatchButtonShadow};
  ${QuickMatchButtonTransition};

  &:hover {
    ${ButtonScaleUp};
  }
`;
