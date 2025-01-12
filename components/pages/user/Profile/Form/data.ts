import { UseFormRegister, FieldErrors } from "react-hook-form";

export type FormData = {
  name: string;
  gender: string;
  dobStamp: string;
  email: string;
  phone: string;
  contactTime: string;
  addressZip: string;
  addressCity: string;
  addressDistrict: string;
  addressDetail: string;
  identity: string;
  disability: string;
};

export type FormHooks = {
  register: UseFormRegister<FormData>;
  errors?: FieldErrors<FormData>;
};

export const User1 = {
  name: "鄭柏易",
  gender: "男生",
  dobStamp: "1999-02-22",
  email: "123@gmail.com",
  phone: "0912345678",
  contactTime: "全天 09：00 - 21：00",
  addressZip: "334",
  addressCity: "高雄市",
  addressDistrict: "新興區",
  addressDetail: "大同路123號",
  identity: "是",
  disability: "無",
};
