export type InquiryData = {
  inquiryId: number;
  inquiryCode: string;
  createdDate: string;
  createdStamp: string;
  isReplied: boolean;
  images: Array<{
    src: string;
    alt: string;
  }>;
  suggetsId: number;
  suggetsCode: string;
};
