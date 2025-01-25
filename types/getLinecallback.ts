import { Error } from "@/types/apiRoutes";

export type RequestGetLineCallback = {
  code: string;
  state: string;
};

export type ResultGetLineCallback = {
  statusCode: number;
  status: boolean;
  message: string;
  data: any;
  error: Error | null;
};

export const ResponseGetLineCallback = {
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
    addressDistinct: "",
    addressDetail: "",
  }
};
