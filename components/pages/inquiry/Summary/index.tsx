import { levelMapping } from "@/helpers/mapping/levelMapping";
import { inquiryInfoMapping } from "@/helpers/mapping/inquiryInfoMapping";
import { InquiryDetailProps } from "../data";
import {
  Wrapper,
  Card,
  Group,
  Field,
  Label,
  Value,
  Additionalinfo,
} from "./styled";

const InquiryDetail = ({ data }: InquiryDetailProps) => {
  return (
    <Wrapper>
      <Card>
        <Group>
          <Field>
            <Label>{inquiryInfoMapping.inquiryCode}</Label>
            <Value>{data.inquiryCode}</Value>
          </Field>
          <Field>
            <Label>{inquiryInfoMapping.createdStamp}</Label>
            <Value>{data.createdStamp}</Value>
          </Field>
          <Field>
            <Label>{inquiryInfoMapping.level}</Label>
            <Value>{levelMapping[data.level]}</Value>
          </Field>
          <Additionalinfo>
            <Label>{inquiryInfoMapping.additionalInfo}</Label>
            <Value>{data.additionalInfo}</Value>
          </Additionalinfo>
        </Group>
      </Card>
    </Wrapper>
  );
};

export default InquiryDetail;
