import styled from "styled-components";

type StatusProps = {
  $isSuggest?: boolean;
};

export const Tbody = styled.tbody`
  padding: 24px 25px;
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
  &:last-of-type::after {
    content: none;
  }
`;

export const Icon = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #103f99;
  border-radius: 50%;
`;

export const Tr = styled.tr`
  display: flex;
  column-gap: 16px;
`;

export const Id = styled.td`
  max-width: 126px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Products = styled.td`
  max-width: 290px;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

export const Creatd = styled.td`
  max-width: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.td<StatusProps>`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  max-width: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $isSuggest }) => ($isSuggest ? "#2ECC71" : "#E74C3C")};
`;

export const Link = styled.td`
  max-width: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
