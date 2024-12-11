import styled from 'styled-components';

const InputButton = styled.button`
  width: 100%;
  background-color: white;
  border-radius: 38px;
  font-weight: bold;
  font-size: 16px;
  padding: 12px;
`;

const SubmitButton = styled(InputButton)`
  background-color: ${ ({ theme }) => theme.colors.secondary };
  border: none;
  color: white;
  margin-bottom: 8px;

  &:hover {
    background-color: #2563EB;
  }
`;

const LineButton = styled(InputButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid ${ ({ theme }) => theme.colors.secondary };
  font-weight: normal;
  margin-bottom: 8px;
  transition: background-color 0.2s;
  svg {
    color: #00B900;
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;

export { SubmitButton, LineButton }