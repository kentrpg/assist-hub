import styled from "styled-components";

export const BackToOrders = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding: 6px 0px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #103f99;
  border-radius: 50%;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #103f99;
`;

export const DepositHeader = styled.th`
  min-width: 90px;
  color: #103f99;
  font-size: 12px;
  font-weight: 400;
`;

export const FeeHeader = styled.th`
  min-width: 90px;
  color: #103f99;
  font-size: 12px;
  font-weight: 400;
`;

export const Deposit = styled.th`
  min-width: 90px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

export const Fee = styled.th`
  min-width: 90px;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  border-top: #e9e5de 1px solid;
`;

export const Detail = styled.div`
  position: relative;
  min-width: 328px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: #e9e5de;
  }
`;

export const Span = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #08204d;
`;
export const Remark = styled.div`
  min-width: 250px;
  padding: 24px;
`;

export const Rental = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const Delivery = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const P = styled.p<{ type: "title" | "content" }>`
  font-size: 14px;
  color: ${({ type }) => (type === "title" ? "#08204D" : "#000000")};
`;
