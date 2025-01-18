export const ResultSignin = {
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

export type ResultSigninType = typeof ResultSignin;
