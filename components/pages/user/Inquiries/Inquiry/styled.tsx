import styled from "styled-components";
import { Tablet, Desktop, Mobile, ExtraLarge } from "@/styles/container";

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
  padding: 10px 10px;
  border-bottom: 1px solid #e9e5de;
  &:last-of-type {
    border-bottom: none;
  }

  @media (${Desktop}) {
    padding: 24px 25px;
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
  gap: 10px;
  @media (${ExtraLarge}) {
    gap: 25px;
  }
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    @media (${Tablet}) {
      width: 70px;
      height: 70px;
    }
    @media (${Desktop}) {
      width: 80px;
      height: 80px;
    }
  }
`;

export const Icon = styled.button<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #103f99;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  opacity: ${({ $isSuggest }) => ($isSuggest === false ? 0.5 : 1)};
  pointer-events: ${({ $isSuggest }) =>
    $isSuggest === false ? "none" : "auto"};
  &:hover {
    background-color: "#0b2c6b";
    cursor: ${({ $isSuggest }) =>
      $isSuggest === false ? "not-allowed" : "pointer"};
  }
`;
