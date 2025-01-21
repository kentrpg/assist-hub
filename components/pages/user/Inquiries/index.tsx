import React from "react";
import {
  InquiryContainer,
  Title,
  GridContainer,
  HeaderRow,
  Grid,
} from "./styled";
import Inquiry from "./Inquiry";
import Empty from "./Empty";
import { InquiryData } from "@/components/pages/user/Inquiries/data";

type InquiriesProps = {
  inquiriesData?: InquiryData[];
};

const Inquiries: React.FC<InquiriesProps> = ({ inquiriesData }) => {
  const inquiries = inquiriesData || [];

  return (
    <InquiryContainer>
      <Title>詢問單</Title>
      {inquiries.length === 0 ? (
        <Empty />
      ) : (
        <GridContainer>
          <HeaderRow>
            <Grid>單號</Grid>
            <Grid>詢問的輔具</Grid>
            <Grid>建立日期</Grid>
            <Grid>詢問狀態</Grid>
            <Grid>詢問單</Grid>
            <Grid>建議單</Grid>
          </HeaderRow>
          {inquiries.map((inquiry) => (
            <Inquiry key={inquiry.inquiryId} inquiry={inquiry} />
          ))}
        </GridContainer>
      )}
    </InquiryContainer>
  );
};

export default Inquiries;
