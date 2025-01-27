import styled from "styled-components";
import { ButtonRadiusSmall } from "@/styles/borderRadius";

export const Wrapper = styled.div`
  position: relative;
  font-size: 0;
`;

export const Container = styled.div`
  width: 200px;
  height: auto;
  position: absolute;
  left: 50%;
  bottom: 135%;
  transform: translateX(-50%);
  ${ButtonRadiusSmall}
  background-color: ${({ theme }) => theme.colors.infoLight};
  padding: 12px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 50%;
    bottom: -8px;
    border-style: solid;
    border-width: 8px 8px 0;
    border-color: ${({ theme }) =>
      theme.colors.infoLight} transparent transparent;
    transform: translateX(50%);
  }
`;

export const Icon = styled.button`
  font-size: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  outline: none;

  @media (hover: hover) {
    &:hover + ${Container} {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (hover: none) {
    &:focus-within + ${Container} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
