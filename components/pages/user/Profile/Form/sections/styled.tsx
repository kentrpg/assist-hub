import styled from "styled-components";

type InputProps = {
  $Isdisabled?: boolean;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  max-height: 42px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  outline: solid #888888 1px;
  flex: 1;
  outline: ${({ disabled }) => disabled && "none"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  }

  &::placeholder {
    color: ${({ disabled }) => (disabled ? "#B3B3B3" : "#000000")};
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  font-weight: 400;
`;

export const SubTitle = styled.label<InputProps>`
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  color: ${({ $Isdisabled }) => ($Isdisabled ? "#B3B3B3" : "#08204D")};
`;

export const Select = styled.select`
  padding: 12px 16px;
  border-radius: 4px;
  outline: solid #888888 1px;
`;

export const SelectCheckbox = styled.div`
  min-width: 90px;
  font-size: 16px;
  display: flex;
  column-gap: 12px;
`;

export const IconWrapper = styled.div`
  height: 24px;
  position: absolute;
  top: 50px;
  right: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  column-gap: 24px;
  padding-bottom: 25px;
`;

export const GenderField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const GenderSelection = styled.div`
  display: flex;
  column-gap: 12px;
  font-size: 16px;
`;

export const NameField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  flex: 1;
  position: relative;
`;

export const FieldBase = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  flex: 1;
  position: relative;
`;

// 繼承 FieldBase
export const PhoneField = styled(FieldBase)``;

export const EmailField = styled(FieldBase)``;

export const ChangePwField = styled(FieldBase)``;

export const DobField = styled(FieldBase)``;

export const ContactField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const AddressGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  position: relative;
  padding-bottom: 25px;
`;

export const AddressDetails = styled.div`
  width: 100%;
  display: flex;
  column-gap: 24px;
`;

export const Street = styled.div`
  max-width: 100%;
  display: flex;
  column-gap: 24px;
  width: 50%;
`;

export const Located = styled.div`
  width: 50%;
`;

export const AddressInput = styled.input`
  padding: 12px 16px;
  border-radius: 4px;
  width: 33.333%;
  outline: solid #888888 1px;

  &::placeholder {
    color: #000000;
  }
`;

export const AddressSelect = styled.select`
  width: 33.333%;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 16px;
  border-radius: 4px;
  outline: solid #888888 1px;
`;

export const IdentityField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding-bottom: 25px;
`;
export const IdentitySelection = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const DisabilityField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const DisabilitySelection = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const ChangPwBtn = styled.button`
  max-width: 170px;
  padding: 10px 40px;
  font-weight: 500;
  font-size: 18px;
  color: black;
  background-color: ${({ theme }) => theme.colors.seccondaryLight};
  border-radius: 30px;
`;
