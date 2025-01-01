import styled from "styled-components";
import { Container1344 } from "@/styles/container";

type CellProps = {
  $border?: boolean;
  $isEm?: boolean;
};

type RowProps = {
  $bg?: boolean;
};

export const Container = styled(Container1344)`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
  max-width: 1200px;
  padding: 36px 48px;
  overflow-x: auto;
  @media (max-width: 945px) {
    padding: 0px;
  }
`;

export const Header = styled.h1`
  text-align: center;
  color: #08204d;
  font-size: 24px;
  font-weight: 500;
`;

export const GridContainer = styled.div`
  display: grid;
  border: 1px solid #e9e5de;
  border-radius: 10px;
  grid-template-rows: repeat(5, auto);
  grid-auto-flow: row;
  white-space: nowrap;
  min-width: 800px;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: 100px repeat(4, 1fr);
  align-items: center;
  border-bottom: 1px solid #ddd;
  background-color: ${({ $bg }) => ($bg ? "#F9F8F6" : "white")};

  &:last-child {
    border-bottom: none;
  }
`;

export const Cell = styled.div<CellProps>`
  font-size: ${({ $isEm }) => ($isEm ? "20px" : "14px")};
  font-weight: ${({ $isEm }) => ($isEm ? "700" : "400")};
  padding: 10px 20px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-left: ${({ $border }) => ($border ? "1px solid #e9e5de" : "none")};
  &:first-child {
    border-left: none;
  }

  &:nth-child(1) {
    display: flex;
    align-items: center;
    position: sticky; 
    height: 100%;
    left: 0;
    background-color: white; 
    z-index: 2; 
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding: 20px 0px 40px 0px;
  border-left: 1px solid #e9e5de;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  max-height: 200px;
`;

export const Button = styled.button`
  background-color: #103f99;
  display: flex;
  column-gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
`;

export const Span = styled.span`
  display: flex;
  column-gap: 4px;
  padding: 3px 8px;
  color: #888888;
  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid #888888;
`;
