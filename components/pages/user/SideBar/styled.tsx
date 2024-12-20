import styled from "styled-components";

type ButtonProps = {
  $isActive?: boolean;
};

export const SideBarContainer = styled.div`
  min-width: 270px;
  padding: 60px 33px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

export const Span = styled.span`
  height: 21px;
`;

export const Profile = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const Info = styled.div`
  row-gap: 12px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const Email = styled.span`
  color: #888888;
  text-align: center;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Tab = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 10px 0px;
  background-color: ${({ $isActive }) => ($isActive ? "#103f99" : "white")};
  border-radius: 10px;
  color: ${({ $isActive }) => ($isActive ? "white" : "black")};
  &:hover {
    background-color: #ffe08a;
  }
`;

export const Basic = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Orders = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Inquiries = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
