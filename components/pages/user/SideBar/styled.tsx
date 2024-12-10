import styled from "styled-components";
interface ButtonProps {
  isActive?: boolean;
}

export const SideBarContainer = styled.div`
  max-width: 270px;
  height: 476px;
  /* background-color: #b5a4a4; */
  padding: 60px 33px;
`;

export const ProfileImg = styled.div`
  max-width: 204px;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const SideBarHeader = styled.div`
  max-width: 204px;
  height: 60px;
  row-gap: 12px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;
export const Email = styled.span`
  width: 204px;
  color: #888888;
  text-align: center;
`;

export const Tabs = styled.div`
  max-width: 204px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ButtonContent = styled.div`
  width: 90px;
  height: 24px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Button = styled.button<ButtonProps>`
  width: 204px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 10px 0px;
  background-color: ${({ isActive }) => (isActive ? "#103f99" : "white")};
  border-radius: 10px;
  color: ${({ isActive }) => (isActive ? "white" : "black")};
`;
