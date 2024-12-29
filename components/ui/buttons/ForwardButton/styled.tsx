import styled from "styled-components";

export const ForwardButtonStyle = styled.button`
  position: absolute;
  right: 11px;
  top: 6.5px;
  background: none;

  svg {
    vertical-align: top;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
