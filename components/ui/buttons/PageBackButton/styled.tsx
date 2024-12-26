import {
  buttonScale,
  buttonShadow,
  buttonShadowTransition,
} from "@/styles/effect";
import styled from "styled-components";

export const NavigateBackButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: ${buttonShadowTransition};

  &:hover {
    box-shadow: ${buttonShadow};
  }

  &:active {
    transform: ${buttonScale};
  }
`;
