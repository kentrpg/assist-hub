import styled from "styled-components";

type StatusProps = {
  $isSuggest?: boolean;
};

export const ContentRow = styled.div`
  display: grid;
  gap: 16px;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  grid-template-columns:
    minmax(60px, 1fr) minmax(250px, 3fr) minmax(80px, 1fr)
    minmax(60px, 1fr) minmax(60px, 1fr) minmax(60px, 1fr);
  align-items: center;
  text-align: center;
  padding: 10px 25px;
  border-bottom: 1px solid #e9e5de;
  &:last-of-type {
    border-bottom: none;
  }
`;

export const Grid = styled.div<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ $isSuggest }) =>
    $isSuggest === undefined ? "400" : $isSuggest ? "400" : "700"};
  color: ${({ $isSuggest }) =>
    $isSuggest === undefined ? "#000000" : $isSuggest ? "#2ECC71" : "#E74C3C"};
`;

export const ProductImages = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #103f99;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #0d2d73;
  }
`;
