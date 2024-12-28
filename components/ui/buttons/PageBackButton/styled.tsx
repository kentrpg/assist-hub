import { RoundedFull } from "@/styles/borderRadius";
import {
  ButtonScale,
  ButtonShadow,
  ButtonShadowTransition,
} from "@/styles/effect";
import styled from "styled-components";

export const NavigateBackButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  ${RoundedFull};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  ${ButtonShadowTransition};

  &:hover {
    ${ButtonShadow};
  }

  &:active {
    ${ButtonScale};
  }
`;
