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
};

export type FormHooks = {
  register: UseFormRegister<FormData>;
  errors?: FieldErrors<FormData>;
};