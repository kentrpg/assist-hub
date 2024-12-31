// for inquiryInfo section

type BaseInfoProps = {
  orderId: string;
  createdDate: string;
  actionAssessment: string;
};

export type InquiryInfoProps = BaseInfoProps & {
  description: string;
};

export const inquiryInfoMapping: InquiryInfoProps = {
  "orderId": "單號",
  "createdDate": "建立日期",
  "actionAssessment": "行動評估",
  "description": "補充說明",
}

export const suggestInfoMapping: InquiryInfoProps = {
  "orderId": "單號",
  "createdDate": "建立日期",
  "actionAssessment": "行動評估",
  "description": "專業建議"
}
