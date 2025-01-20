import { Error } from "@/types/apiRoutes";

export const ResultPutAdminSuggestProduct = {
  statusCode: 0,
  status: true,
  message: "",
};

export type ResultPutAdminSuggestProductType = Omit<
  typeof ResultPutAdminSuggestProduct,
  "error" | "data"
> & {
  error: Error | null;
  data: undefined;
};

export type RequestPutAdminSuggestProduct = {
  suggestProductId: number;
  productId: number;
  reasons: string;
};
