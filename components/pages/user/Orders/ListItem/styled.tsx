import styled from "styled-components";

type DeliveryOptionProps = {
  $deliveryType: "自取" | "宅配";
};

type StatusProps = {
  $status: "租賃中" | "已結案";
};

export const Item = styled.div`
  border-radius: 5px;
  outline: 1px solid #888888;
`;

export const Header = styled.div<DeliveryOptionProps>`
  padding: 24px;
  border-radius: 5px 5px 0 0;
  background-color: ${({ $deliveryType }) =>
    $deliveryType === "宅配"
      ? "#fdefec"
      : $deliveryType === "自取"
      ? "#FFF3D3"
      : "#FFFFFF"};
  display: flex;
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
`;

export const Major = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;

export const Type = styled.h4`
  color: #08204d;
  font-size: 28px;
  font-weight: 500;
`;

export const Price = styled.h4`
  color: #08204d;
  font-size: 28px;
  font-weight: 500;
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
  padding: 12px 24px;
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
`;

export const Finished = styled.span`
  max-width: 165px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
`;

export const Status = styled.div<StatusProps>`
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;

  color: ${({ $status }) =>
    $status === "租賃中"
      ? "#103f99"
      : $status === "已結案"
      ? "#B3B3B3"
      : "#000"};
  outline: ${({ $status }) =>
    $status === "租賃中"
      ? "#103f99 solid 2px"
      : $status === "已結案"
      ? "#B3B3B3 solid 2px"
      : "none"};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse; /* 確保邊框不重疊 */
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
  padding: 10px 24px;
  font-size: 12px;
  font-weight: 400;
  color: #08204d;
  white-space: nowrap;
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
  padding: 24px 24px;
  font-size: 14px;
  font-weight: 400;
  column-gap: 24px;
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
