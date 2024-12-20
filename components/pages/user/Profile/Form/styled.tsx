import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Input = styled.input`
  max-width: 441px;
  height: 48px;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 4px;
  outline: solid #888888 1px;
  flex: 1;
  outline: ${(props) => props.disabled && "none"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
  }
`;

export const Select = styled.select`
  max-width: 441px;
  height: 48px;
  padding: 12px 16px;
  border-radius: 4px;
  outline: solid #888888 1px;
`;

export const SelectCheckbox = styled.div`
  min-width: 90px;
  height: 22px;
  font-size: 16px;
  display: flex;
  column-gap: 12px;
`;

export const IconWrapper = styled.div`
  max-width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  bottom: 13px;
`;

export const Wrapper = styled.div`
  max-width: 906px;
  height: 112px;
  display: flex;
  column-gap: 24px;
`;

export const GenderField = styled.div`
  height: 61px;
`;

export const SubTitle = styled.label`
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 12px;
`;
export const GenderSelection = styled.div`
  display: flex;
  column-gap: 12px;
  font-size: 18px;
`;

export const NameField = styled.div`
  height: 87px;
  display: flex;
  flex-direction: column;
  max-width: 441px;
  flex: 1;
  position: relative;
`;
export const DobField = styled.div`
  height: 87px;
  display: flex;
  flex-direction: column;
  max-width: 441px;
  flex: 1;
`;

export const EmailField = styled.div`
  max-width: 441px;
  height: 87px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ChangePwField = styled.div`
  max-width: 441px;
  height: 87px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const PhoneField = styled.div`
  max-width: 441px;
  height: 87px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContactField = styled.div`
  max-width: 441px;
  height: 87px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AddressGroup = styled.div`
  max-width: 906px;
  height: 112px;
  display: flex;
  flex-direction: column;
`;

export const AddressDetails = styled.div`
  height: 48px;
  display: flex;
  column-gap: 24px;
  position: relative;
`;

export const AddressInput = styled.input`
  max-width: 131px;
  height: 48px;
  padding: 0px 12px;
  border-radius: 4px;
  outline: solid #888888 1px;
`;

export const AddressSelect = styled.select`
  min-width: 131px;
  height: 48px;
  padding: 0px 12px;
  border-radius: 4px;
  outline: solid #888888 1px;
`;

export const IdentityField = styled.div`
  max-width: 906px;
  height: 61px;
  display: flex;
  flex-direction: column;
`;
export const IdentitySelection = styled.div`
  max-width: 906px;
  height: 22px;
  display: flex;
  column-gap: 12px;
`;

export const DisabilityField = styled.div`
  max-width: 906px;
  height: 61px;
  display: flex;
  flex-direction: column;
`;

export const DisabilitySelection = styled.div`
  max-width: 906px;
  height: 22px;
  display: flex;
  column-gap: 12px;
`;

export const ChangPwBtn = styled.button`
  max-width: 112px;
  height: 50px;
  font-size: 16px;
  color: #08204d;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid #08204d;
`;

export const SaveBtn = styled.button`
  margin-top: 44px;
  font-size: 16px;
  width: 100%;
  height: 48px;
  padding: 12px 0px;
  background-color: #ffc123;
  border-radius: 38px;
`;