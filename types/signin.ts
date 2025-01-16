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
  statusCode: string,
  status: boolean,
  message: string,
  JWTToken: string,
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
