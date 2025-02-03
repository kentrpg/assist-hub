import styled, { keyframes } from "styled-components";

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    `color-mix(in srgb, ${theme.colors.white} 80%, transparent)`};
  z-index: 9999;
`;

export const CardLoadingWrapper = styled(LoadingWrapper)`
  position: absolute;
  background-color: ${({ theme }) =>
    `color-mix(in srgb, ${theme.colors.white} 75%, transparent)`};
  z-index: 100;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid
    ${({ theme }) =>
      `color-mix(in srgb, ${theme.colors.grey100} 50%, transparent)`};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  pointer-events: none;
`;
