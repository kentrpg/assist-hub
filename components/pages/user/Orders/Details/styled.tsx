import styled from "styled-components";

export type PProps = {
  $type: "title" | "content";
};

export const Container = styled.div`
  max-width: 1002px;
  padding: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border-radius: 10px;
  outline: 1px solid #888888;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const BackToOrders = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding: 6px 0px;
`;

export const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #103f99;
  border-radius: 50%;
`;

export const Title = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #103f99;
  background-color: #fff;
`;

export const DepositHeader = styled.th`
  text-align: center;
  padding: 10px 0px;
  font-size: 12px;
  font-weight: 400;
  color: #08204d;
  white-space: nowrap;
`;

export const FeeHeader = styled.th`
  text-align: center;
  padding: 10px 0px;
  font-size: 12px;
  font-weight: 400;
  color: #08204d;
  white-space: nowrap;
`;

export const Deposit = styled.th`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const Fee = styled.th`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export const Footer = styled.div`
  display: flex;
  border-top: #e9e5de 1px solid;
`;

export const Detail = styled.div`
  position: relative;
  max-width: 328px;
  width: 100%;
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
  max-width: 250px;
  width: 100%;
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
  column-gap: 30px;
`;

export const P = styled.p<PProps>`
  font-size: 14px;
  color: ${({ $type }) => ($type === "title" ? "#08204D" : "#000000")};
  font-weight: ${({ $type }) => ($type === "title" ? "400" : "500")};
  max-width: ${({ $type }) => ($type === "title" ? "60px" : "190px")};
  width: 100%;
`;
