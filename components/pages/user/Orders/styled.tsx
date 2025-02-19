import styled from "styled-components";
import { ExtraLarge, Desktop, Tablet, Mobile } from "@/styles/container";

type TabProps = {
  $active: boolean;
};

export const OrderContainer = styled.div`
  min-width: 0;
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border-radius: 10px;
  outline: 1px solid #888888;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  @media (${ExtraLarge}) {
    padding: 48px;
  }
`;

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  justify-content: space-between;
  @media (${Mobile}) {
    flex-direction: row;
  }
`;

export const Title = styled.h5`
  font-weight: 500;
  font-size: 24px;
  padding-left: 14px;
  color: #08204d;
  border-left: 5px solid #08204d;
  display: none;
  @media (${Tablet}) {
    display: block;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    position: relative;
  }
  & > *:not(:last-child)::after {
    content: "";
    width: 1px;
    height: 21px;
    background-color: #e9e5de;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Tab = styled.button<TabProps>`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "#08204d" : "#888888")};
  background-color: white;
  transition: all 0.3s ease;

  @media (${Mobile}) {
    min-width: 86px;
  }

  &:hover {
    cursor: pointer;
    color: #08204d;
  }
`;
