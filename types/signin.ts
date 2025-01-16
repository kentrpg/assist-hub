export const ResultSignin = {
  statusCode: "",
  status: true,
  message: "",
  JWTToken: "",
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

export type ResultSigninType = {
  statusCode: number,
  status: boolean,
  message: string,
  jwtToken: string,
  data: {
    jwtToken: string,
    name: string,
    email: string,
    phone: string,
    addressZip: string,
    addressCity: string,
    addressDistinct: string,
    addressDetail: string,
  }
};
