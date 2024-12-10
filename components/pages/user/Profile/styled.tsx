import styled from "styled-components";

export const ProfileContainer = styled.div`
  flex: 1;
  max-width: 1002px;
  color: #08204d;
  height: 1132px;
  padding: 48px;
  background-color: #f4f2ee;
`;

export const Wrapper = styled.div`
  max-width: 906px;
  display: flex;
`;

export const ProfileTitile = styled.h2`
  max-width: 906px;
  font-size: 24px;
  height: 36px;
  padding-left: 17px;
  border-left: 5px solid #08204d;
  margin-bottom: 20px;
`;

export const GenderField = styled.div`
  height: 74px;
`;
export const SubTitle = styled.label`
  display: inline-block;
  height: 40px;
  font-size: 20px;
`;
export const GenderSelection = styled.div`
  display: flex;
  column-gap: 12px;
  font-size: 18px;
  height: 22px;
`;

export const NameField = styled.div`
  height: 112px;
  max-width: 441px;
  margin-right: 24px;
  flex: 1;
`;
export const DobField = styled.div`
  height: 112px;
  max-width: 441px;
  flex: 1;
`;

export const SaveBtn = styled.button`
  font-size: 16px;
  width: 100%;
  padding: 12px 0px;
  background-color: #ffc123;
  border-radius: 38px;
`;
