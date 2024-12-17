import styled from "styled-components";

type DeliveryType = "自取" | "宅配";

type DeliveryOptionProps = {
  $deliveryType: DeliveryType;
};

type StatusType = "租賃中" | "已結案";

type StatusProps = {
  $status: StatusType;
};

export const OrdersContainer = styled.div`
  padding: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border-radius: 10px;
  outline: 1px solid #888888;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h5`
  font-weight: 500;
  font-size: 24px;
  padding-left: 14px;
  color: #08204d;
  border-left: 5px solid #08204d;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tab = styled.button`
  min-width: 86px;
  height: 21px;
  font-size: 14px;
  font-weight: 700;
  color: #08204d;
  background-color: #fff;
`;

export const OrderLists = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const OrderList = styled.div`
  border-radius: 5px;
  outline: 1px solid #888888;
`;

export const ListHeader = styled.div<DeliveryOptionProps>`
  padding: 24px;
  border-radius: 5px 5px 0 0;
  /* background-color: #fdefec; */
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

export const ListMain = styled.div`
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
  min-width: 165px;
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
`;

export const Thead = styled.thead`
  padding: 10px 24px;
  display: flex;
  column-gap: 24px;
  position: relative;
  /* 下方間格線 */
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

export const Tr = styled.tr`
  display: flex;
  column-gap: 24px;
  align-items: center;
`;

export const NameHeader = styled.th`
  display: flex;
  min-width: 360px;
  font-size: 12px;
  font-weight: 400;
`;

export const Th = styled.th`
  min-width: 90px;
  color: #103f99;
  font-size: 12px;
  font-weight: 400;
`;

export const Tbody = styled.tbody`
  padding: 24px 24px;
  display: flex;
  column-gap: 24px;
`;

export const Product = styled.td`
  max-width: 360px;
  display: flex;
  column-gap: 24px;
`;

export const Td = styled.td`
  min-width: 90px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

export const Description = styled.div`
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

export const BtnContainer = styled.td``;

export const DetailsBtn = styled.button`
  min-width: 132px;
  height: 50px;
  border-radius: 30px;
  outline: 1px solid #103f99;
  font-size: 16px;
  font-weight: 700;
  color: #103f99;
`;
