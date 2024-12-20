import { UseFormRegister, FieldErrors } from "react-hook-form"; // 引入 react-hook-form 類型

export type FormData = {
  firstName: string;
  lastName: string;
  gender: string;
  name: string;
  dob: string;
  email: string;
  phone: string;
  contactTime: string;
  postalCode: string;
  city: string;
  district: string;
  address: string;
  identity: string;
  declaration: string;
};

export type FormHooks = {
  register: UseFormRegister<FormData>;
  errors?: FieldErrors<FormData>;
};
