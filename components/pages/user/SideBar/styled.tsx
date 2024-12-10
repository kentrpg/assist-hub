import styled from "styled-components";

export const SideBarContainer = styled.div`
  max-width: 270px;
  height: 468px;
  background-color: darkcyan;
  padding: 60px 0px;
`;

// export SideBarHeader = styled.div`

// `

export const SideBarTabs = styled.div`
  max-width: 204px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const SideBarActiveButton = styled.button`
  width: 100%;
  font-size: 14px;
  padding: 10px 0px;
  background-color: #103f99;
  border-radius: 10px;
  color: white;
`;
export const SideBarButton = styled.button`
  width: 100%;
  font-size: 14px;
  padding: 10px 0px;
  background-color: white;
  border-radius: 10px;
  color: black;
`;
