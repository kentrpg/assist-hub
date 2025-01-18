import styled from "styled-components";
import { ExtraLarge, Desktop, Tablet, Mobile } from "@/styles/container";

export const Item = styled.div`
  border-radius: 5px;
  outline: 1px solid #888888;
`;

export const Header = styled.div`
  padding: 12px;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #888888;
  }
  @media (${Mobile}) {
    padding: 24px;
    flex-direction: row;
  }
`;

export const Major = styled.div`
  display: flex;
  column-gap: 20px;
  @media (${Mobile}) {
    align-items: center;
  }
`;

export const Type = styled.h4`
  color: #08204d;
  font-size: 24px;
  font-weight: 500;
  @media (${Mobile}) {
    font-size: 28px;
  }
`;

export const Price = styled.h4`
  color: #08204d;
  font-size: 28px;
  font-weight: 500;
  align-self: end;
  @media (${Mobile}) {
    align-self: normal;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const Id = styled.h6`
  font-weight: 700;
  font-size: 20px;
`;

export const Created = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #888888;
`;

export const Main = styled.div`
  padding: 12px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  @media (${Mobile}) {
    padding: 12px 24px;
  }
`;

export const Finished = styled.span`
  max-width: 165px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
`;

export const Status = styled.div`
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
`;

export const ColGroup = styled.colgroup``;

export const Col = styled.col`
  width: auto;
`;

export const Thead = styled.thead`
  background-color: #e9e5de;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid #e9e5de;
`;

export const NameHeader = styled.th`
  text-align: left;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 400;
  color: #08204d;
  white-space: nowrap;
  @media (${Mobile}) {
    padding: 12px 24px;
  }
`;

export const QuantityrHeader = styled.th`
  text-align: center;
  padding: 10px 0px;
  font-size: 12px;
  font-weight: 400;
  color: #08204d;
  white-space: nowrap;
`;

export const RentHeader = styled.th`
  text-align: center;
  padding: 10px 0px;
  font-size: 12px;
  font-weight: 400;
  color: #08204d;
  white-space: nowrap;
`;

export const OthersHeader = styled.th`
  text-align: center;
  padding: 10px 0px;
  font-size: 12px;
  font-weight: 400;
  color: #08204d;
  white-space: nowrap;
`;

export const Product = styled.td`
  display: flex;
  align-items: center;
  padding: 24px 12px;
  font-size: 14px;
  font-weight: 400;
  column-gap: 24px;
  @media (${Mobile}) {
    padding: 12px 24px;
  }
`;

export const Quantity = styled.td`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const Rent = styled.td`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const Others = styled.td`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const BtnContainer = styled.td`
  text-align: center;
  padding-right: 24px;
`;

export const DetailsBtn = styled.button`
  padding: 13px 34px;
  white-space: nowrap;
  background-color: #103f99;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  height: 50px;
  cursor: pointer;
  border-radius: 30px;
`;

export const Description = styled.div`
  max-width: 270px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;
export const Name = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #08204d;
`;

export const Feature = styled.p`
  font-weight: 400;
  font-size: 12px;
`;
