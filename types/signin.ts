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
    IsAdmin: true,
  },
};

export type RequestSignin = {
  email: string;
  password: string;
};

export type ResultSigninType = typeof ResultSignin;
