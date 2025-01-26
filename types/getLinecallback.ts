import { Error } from "@/types/apiRoutes";

export type RequestGetLineCallbackQueryType = {
  code?: string;
  state?: string;
  error?: string;
  error_description?: string;
};

export type RequestGetLineCallbackType = {
  code: string;
  state: string;
};

export type LineUserData = {
  jwtToken: string;
  name: string;
  email: string;
  phone: string;
  addressZip: string;
  addressCity: string;
  addressDistrict: string;
  addressDetail: string;
};

export type ResponseGetLineCallback = {
  statusCode: number;
  status: boolean;
  message: string;
  data: LineUserData | undefined;
  error: Error | null;
};

export const ResponseGetLineCallbackDefault = {
  statusCode: 0,
  status: true,
  message: "",
  data: {
    jwtToken: "",
    name: "",
    email: "",
    phone: "",
    addressZip: "",
    addressCity: "",
    addressDistrict: "",
    addressDetail: "",
  }
};
