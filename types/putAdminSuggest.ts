import { Error } from "@/types/apiRoutes";

export const ResultPutAdminSuggest = {
  statusCode: 0,
  status: true,
  message: "",
};

export type ResultPutAdminSuggestType = Omit<typeof ResultPutAdminSuggest, "error" | "data"> & {
  error: Error | null;
  data: undefined;
};

export type RequestPutAdminSuggest = {
  suggestId: number;
  level: string;
  additionalInfo: string;
  isSubmitted: boolean;
};
