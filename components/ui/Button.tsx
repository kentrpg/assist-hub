import styled from "styled-components";

const InputButton = styled.button`
  width: 100%;
  background-color: white;
  border-radius: 38px;
  font-weight: bold;
  font-size: 16px;
  padding: 12px;
`;

const SubmitButton = styled(InputButton)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  color: white;
  margin-top: 30px;

  &:hover {
    background-color: #2563eb;
  }
`;

const LineButton = styled(InputButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-weight: normal;
  margin: 8px 0;
  transition: background-color 0.2s;
  svg {
    color: #06c755;
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;

export { SubmitButton, LineButton };
