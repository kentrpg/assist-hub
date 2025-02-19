import styled from "styled-components";
import { ExtraLarge, Desktop, Tablet, Mobile } from "@/styles/container";

type $LineProps = {
  $isCompleted: boolean;
};

type $NodeProps = {
  $isCompleted: boolean;
};

type $LabelProps = {
  $isCompleted: boolean;
};

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  align-items: center;
  width: 100%;
  padding: 12px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e9e5de;
  }
  @media (${Mobile}) {
    padding: 24px;
  }
`;

export const Top = styled.div`
  max-width: 504px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Bottom = styled.div`
  max-width: 536px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.div<$LineProps>`
  flex: 1;
  height: 8px;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? "#FFCC1A" : "#FFF3D3"};
`;

export const Node = styled.div<$NodeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? "#FFF8E1" : "#FFFFFF"};
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 12px;
  max-width: 56px;
  width: 100%;
`;

export const IconWrapper = styled.div`
  max-width: 32px;
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div<$LabelProps>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ $isCompleted }) => ($isCompleted ? "#000000" : "#A0A0A0")};
  text-align: center;
`;
