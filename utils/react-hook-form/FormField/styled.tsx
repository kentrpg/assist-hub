import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin: 12px 0;

  input:focus + label,
  :not(:placeholder-shown) + label {
    top: 0;
    left: 12px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
    padding: 0 6.5px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  outline: none;
  transition: box-shadow 0.13s ease-out, border-color 0.1s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary},
      0 0 0 1000px ${({ theme }) => theme.colors.white} inset;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.15s ease-in-out;
  pointer-events: none;
`;

export const PasswordInputField = styled(InputField)`
  padding: 14px 40px 14px 16px;
`;

export const TogglePassword = styled.span`
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
