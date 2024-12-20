import styled from "styled-components";

export const OrdersContainer = styled.div`
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
`;

export const Tab = styled.button`
  min-width: 86px;
  height: 21px;
  font-size: 14px;
  font-weight: 700;
  color: #08204d;
  background-color: #fff;
`;

export const OrderLists = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
