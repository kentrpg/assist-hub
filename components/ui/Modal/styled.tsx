import styled, { css, keyframes } from "styled-components";
import { ButtonRadius, CardRadius } from "@/styles/borderRadius";
import {
  BaseButton,
  buttonSizes,
  PrimaryButton,
} from "@/components/ui/buttons/Layout";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translate(-50%, -60%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

type WrapperProps = {
  $isOpen: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    `color-mix(in srgb, ${theme.colors.textSecondary} 50%, transparent)`};
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const Content = styled.div`
  ${CardRadius};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  animation: ${slideIn} 0.3s ease-in-out;
  padding: 36px 44px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Button = styled(PrimaryButton)`
  width: 100%;
  margin-top: 16px;
  ${buttonSizes.small};
`;

export const OutlinedButton = styled.button`
  width: 100%;
  ${BaseButton};
  ${buttonSizes.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
