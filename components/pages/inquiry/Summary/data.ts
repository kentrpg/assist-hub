type BaseInfoProps = {
  inquiryCode: string;
  createdStamp: string;
  level: string;
  additionalInfo: string;
};

export type InquiryInfoProps = BaseInfoProps;

// export type InquiryInfoProps = BaseInfoProps & {
//   description?: string;
// };

export const suggestInfoMapping: BaseInfoProps = {
  inquiryCode: "單號",
  createdStamp: "建立日期",
  level: "行動評估",
  additionalInfo: "專業建議",
};

