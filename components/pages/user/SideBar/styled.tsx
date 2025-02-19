import styled from "styled-components";
import { Tablet, Desktop, Mobile, ExtraLarge } from "@/styles/container";

type ButtonProps = {
  $isActive?: boolean;
};

export const SideBarContainer = styled.div`
  width: 100%;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  @media (${Tablet}) {
    padding-top: 24px;
    max-width: 210px;
  }
  @media (${ExtraLarge}) {
    max-width: 270px;
    padding: 48px 33px;
  }
`;

export const Span = styled.span`
  height: 21px;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  @media (${Tablet}) {
    flex-direction: column;
  }
`;

export const Tab = styled.button<ButtonProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  column-gap: 10px;
  font-size: 14px;
  padding: 10px 0px;
  background-color: ${({ $isActive }) => ($isActive ? "#08204D" : "white")};
  border-radius: 10px;
  color: ${({ $isActive }) => ($isActive ? "white" : "black")};
  &:hover {
    background-color: #0b2c6b;
    color: white;
  }
  @media (${Mobile}) {
    padding: 10px 30px;
  }
  @media (${ExtraLarge}) {
    padding: 10px 57px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  max-width: 90px;
  width: 100%;
`;
