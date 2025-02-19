import styled from "styled-components";

export const BreadCrumbContainer = styled.nav`
  width: 100%;
`;

export const Ol = styled.ol`
  display: flex;
  column-gap: 4px;
`;

export const Li = styled.li`
  font-size: 16px;
  font-weight: 500;
  color: #103f99;
  &:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :hover {
    color: #0b2c6b;
  }
  a {
    font-weight: 400;
    color: #888888;
    white-space: nowrap;
  }
`;
