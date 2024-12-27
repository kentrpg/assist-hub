import styled from "styled-components";

type TabProps = {
  $active: boolean;
};

export const Container = styled.div`
  max-width: 1002px;
  padding: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border-radius: 10px;
  outline: 1px solid #888888;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h5`
  font-weight: 500;
  font-size: 24px;
  padding-left: 14px;
  color: #08204d;
  border-left: 5px solid #08204d;
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
  min-width: 86px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "#08204d" : "#888888")};
  background-color: white;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    color: #08204d;
  }
`;
