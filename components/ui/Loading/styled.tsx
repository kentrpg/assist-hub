import styled from "styled-components";

export const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1000;
`;

export const LoadingImage = styled.img`
  vertical-align: middle;
  width: 100px;
  height: auto;
  animation: rotate 6s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
