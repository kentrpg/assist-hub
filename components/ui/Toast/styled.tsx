import styled, { css, keyframes } from "styled-components";
import { InputRadius } from "@/styles/borderRadius";
import { ShadowLow } from "@/styles/effect";
import { Toast as ToastType } from "@/types/uiProps";

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const ToastContainer = styled.div<ToastType>`
  position: fixed;
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  padding: 12px 20px;
  background: ${({ theme, $type }) =>
    $type === "success" ? theme.colors.success : theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  ${InputRadius};
  ${ShadowLow};
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1;

  ${({ $isLeaving }) =>
    $isLeaving
      ? css`
          animation: ${slideOutRight} 0.3s ease-in-out forwards;
        `
      : css`
          animation: ${slideInRight} 0.3s ease-in-out;
        `};
`;
