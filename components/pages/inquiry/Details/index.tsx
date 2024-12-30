import { InquiryDetailProps } from "@/components/pages/inquiry/data";
import { Wrapper, Card, Group, Field, Label, Value } from "./styled";

const InquiryDetail = ({ data, mapping }: InquiryDetailProps) => {
  return (
    <Wrapper>
      <Card>
        <Group>
          <Field>
            <Label>{mapping.orderId}</Label>
            <Value>{data.orderId}</Value>
          </Field>
          <Field>
            <Label>{mapping.createdDate}</Label>
            <Value>{data.createdDate}</Value>
          </Field>
        </Group>
        <Group>
          <Field>
            <Label>{mapping.actionAssessment}</Label>
            <Value>{data.actionAssessment}</Value>
          </Field>
          <Field>
            <Label>{mapping.additionalDescription}</Label>
            <Value>{data.additionalDescription}</Value>
          </Field>
        </Group>
      </Card>
    </Wrapper>
  );
};

export default InquiryDetail;
