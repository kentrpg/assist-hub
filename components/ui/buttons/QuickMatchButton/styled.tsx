import { RoundedFull } from "@/styles/borderRadius";
import {
  ButtonScaleUp,
  QuickMatchButtonShadow,
  QuickMatchButtonTransition,
} from "@/styles/effect";
import styled from "styled-components";
import { circularSizes } from "../../circulars";
import { VstackLayout } from "@/styles/flex";

export const QuickMatchButtonStyle = styled.button`
  ${circularSizes.large};
  ${VstackLayout};
  ${RoundedFull};
  background: conic-gradient(
    #ff6f61,
    #ffca28,
    #66bb6a,
    #42a5f5,
    #ab47bc,
    #ff6f61
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
