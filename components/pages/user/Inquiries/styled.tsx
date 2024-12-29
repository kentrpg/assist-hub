import styled from "styled-components";

export const InquiryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 48px;
  border-radius: 10px;
  border: 1px solid #888888;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  row-gap: 24px;
`;

export const Title = styled.h5`
  font-size: 24px;
  color: #08204d;
  border-left: 5px #103f99 solid;
  padding: 0px 14px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  border: 1px solid #888888;
  border-radius: 5px;
  overflow: hidden;
`;

export const HeaderRow = styled.div`
  display: grid;
  gap: 16px;
  font-size: 12px;
  white-space: nowrap;
  grid-template-columns:
    minmax(60px, 1fr) minmax(250px, 3fr) minmax(80px, 1fr)
    minmax(60px, 1fr) minmax(60px, 1fr) minmax(60px, 1fr);
  background-color: #e7ecf5;
  padding: 10px 25px;
  font-weight: 700;
  text-align: center;
  color: #08204d;
  border-bottom: 1px solid #888888;
`;

export const Grid = styled.div``;
