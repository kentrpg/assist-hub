import styled from "styled-components";

export const TogglePasswordStyle = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  svg {
    cursor: pointer;
    vertical-align: top;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
