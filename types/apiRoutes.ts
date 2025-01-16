import { FormValuesProps } from "@/utils/react-hook-form/InputField/data";

export type Error = {
  code: number;
  message: string;
}

export type SignInRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  nickname: string;
};

export type AuthResponse = {
  status: number;
  message: string;
};

export type ResponseProps = {
  statusCode: number;
  status: boolean;
  message: string;
};

// TBD: 為什麼使用 <Response> 才會通過，使用 AuthResponse 會報錯 index 會出現 類型 'AuthFnResponse' 沒有屬性 'status'
export type AuthFnResponse = () => Promise<AuthResponse>;
export type SignOutRequest = () => Promise<ResponseProps>;

export type CheckoutRequest = FormValuesProps["checkout"];
