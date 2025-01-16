import styled from "styled-components";
import { Tablet, Desktop, Mobile, ExtraLarge } from "@/styles/container";

type InputProps = {
  $Isdisabled?: boolean;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  max-height: 48px;
  padding: 12px 52px 12px 16px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  outline: solid #888888 1px;
  flex: 1;

  /* &::-webkit-calendar-picker-indicator {
    display: none; // 隱藏日曆圖示 
    -webkit-appearance: none; 
  } */

  outline: ${({ disabled }) => disabled && "none"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  }

  &::placeholder {
    color: "#B3B3B3";
  }
`;

export const Warn = styled.span`
  color: #e74c3c;
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

export const GenderInput = styled.input`
  appearance: none;
`;

export const SelectCheckbox = styled.label`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  column-gap: 8px;
`;

export const NameIcon = styled.div`
  height: 24px;
  position: absolute;
  top: 50px;
  right: 16px;
`;

export const DobIcon = styled.div`
  height: 24px;
  position: absolute;
  top: 50px;
  right: 16px;
`;

export const EmailIcon = styled.div`
  height: 24px;
  position: absolute;
  top: 50px;
  right: 16px;
`;

export const PhoneIcon = styled.div`
  height: 24px;
  position: absolute;
  top: 50px;
  right: 16px;
`;

export const AddressIcon = styled.div`
  height: 24px;
  position: absolute;
  right: 16px;
  bottom: 36px;
  @media (${Mobile}) {
    right: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  row-gap: 12px;
  flex-direction: column;
  padding-bottom: 25px;
  @media (${Mobile}) {
    flex-direction: row;
    column-gap: 24px;
  }
`;

export const GenderField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const GenderSelection = styled.div`
  display: flex;
  column-gap: 12px;
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

export const ContactSelect = styled.select`
  font-size: 16px;
  font-weight: 400;
  max-height: 48px;
  padding: 12px 16px;
  border-radius: 4px;
`;

export const AddressField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding-bottom: 25px;
  position: relative;
`;

export const AddressInfo = styled.div`
  width: 100%;
  display: flex;
  row-gap: 12px;
  flex-direction: column;
  @media (${ExtraLarge}) {
    flex-direction: row;
    column-gap: 24px;
  }
`;

export const AddressLeft = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  @media (min-width: 850px) {
    flex-direction: row;
    column-gap: 24px;
  }
  @media (${ExtraLarge}) {
    width: 50%;
  }
`;

export const AddressRight = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  @media (${ExtraLarge}) {
    width: 50%;
  }
`;

export const Zip = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  @media (${ExtraLarge}) {
    max-width: 131px;
  }
`;
export const City = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  @media (${ExtraLarge}) {
    max-width: 131px;
  }
`;
export const District = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  @media (${ExtraLarge}) {
    max-width: 131px;
  }
`;

export const AddressInput = styled.input`
  padding: 12px 16px;
  max-height: 48px;
  height: 100%;
  border-radius: 4px;
  outline: solid #888888 1px;
  &::placeholder {
    color: "#B3B3B3";
    font-weight: 400;
    font-size: 16px;
  }
`;

export const AddressSelect = styled.select`
  font-size: 16px;
  flex: 1;
  font-weight: 400;
  max-height: 48px;
  padding: 12px 16px;
  border-radius: 4px;
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
  background-color: #fff3d3;
  border-radius: 30px;
`;
