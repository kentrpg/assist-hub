import React from "react";
import {
  InquiryContainer,
  Title,
  Table,
  Thead,
  Tr,
  IdHeader,
  ProductHeader,
  CreatedHeader,
  StatusHeader,
  InquiryHeader,
  SuggestHeader,
} from "./styled";
import { inquiries } from "./data";
import Inquiry from "./Inquiry";

const Inquiries: React.FC = () => {
  return (
    <InquiryContainer>
      <Title>詢問單</Title>
      <Table>
        <Thead>
          <Tr>
            <IdHeader>單號</IdHeader>
            <ProductHeader>詢問輔具</ProductHeader>
            <CreatedHeader>建立日期</CreatedHeader>
            <StatusHeader>狀態</StatusHeader>
            <InquiryHeader>詢問單</InquiryHeader>
            <SuggestHeader>建議單</SuggestHeader>
          </Tr>
        </Thead>
        {inquiries.map((inquiry) => (
          <Inquiry key={inquiry.id} inquiry={inquiry} />
        ))}
      </Table>
    </InquiryContainer>
  );
};

export default Inquiries;
