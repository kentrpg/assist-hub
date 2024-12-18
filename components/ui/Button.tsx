import styled from "styled-components";

const InputButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 38px;
  font-weight: bold;
  font-size: 16px;
  padding: 12px;
  &:disabled {
    opacity: 0.65;
    pointer-events: none;
  }
`;

const SubmitButton = styled(InputButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 30px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textprimary};
  }
`;

const LineButton = styled(InputButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: normal;
  margin: 8px 0;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export { SubmitButton, LineButton };
