import styled from "styled-components";
import { ExtraLarge, Desktop, Tablet, Mobile } from "@/styles/container";

export type PProps = {
  $type: "title" | "content";
};

export const DetailContainer = styled.div`
  min-height: 0;
  overflow: auto;
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border-radius: 10px;
  outline: 1px solid #888888;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  @media (${ExtraLarge}) {
    padding: 48px;
  }
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
  flex-direction: column;
  border-top: #e9e5de 1px solid;
  @media (${ExtraLarge}) {
    flex-direction: row;
  }
`;

export const RentInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-bottom: #e9e5de 1px solid;
  @media (${Mobile}) {
    flex-direction: row;
  }
  @media (${ExtraLarge}) {
    border-bottom: none;
  }
`;

export const Detail = styled.div`
  position: relative;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media (${Mobile}) {
    padding: 24px;
  }
  @media (${ExtraLarge}) {
    max-width: 328px;
  }
  &:nth-child(1) {
    border-bottom: #e9e5de 1px solid;
    @media (${Mobile}) {
      border-bottom: none;
    }
  }

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
  padding: 12px;
  @media (${Mobile}) {
    padding: 24px;
  }
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
  row-gap: 8px;
  flex-direction: column;
  @media (${ExtraLarge}) {
    flex-direction: row;
    column-gap: 30px;
  }
`;

export const P = styled.p<PProps>`
  font-size: 14px;
  color: ${({ $type }) => ($type === "title" ? "#08204D" : "#000000")};
  font-weight: ${({ $type }) => ($type === "title" ? "400" : "500")};
  max-width: ${({ $type }) => ($type === "title" ? "60px" : "190px")};
  width: 100%;
  word-break: break-word;
  overflow-wrap: anywhere;
`;
