import { RegisterField } from "@/utils/react-hook-form/types";

export type SignUpResponse = {
  status: boolean;
  token: string;
  message: string;
};

export type SignUpInputs = {
  [key: string]: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const registerFields: RegisterField<SignUpInputs>[] = [
  {
    name: "name",
    label: "姓名",
    type: "text",
    validation: {
      validate: {
        notEmpty: (value: string) => {
          if (!value || value.trim() === "") {
            return "請輸入正確姓名";
          }
          return true;
        },
      },
    },
    errorType: "default",
  },
  {
    name: "email",
    label: "帳號（您的電子信箱）",
    type: "email",
    validation: {
      required: "請填寫電子信箱",
      validate: {
        // RFC 5322 標準
        domain: (value: string) => {
          const beforeAtRegex =
            /@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
          return beforeAtRegex.test(value) || "請輸入有效的電子郵件域名";
        },
        local: (value: string) => {
          const beforeAtRegex =
            /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x01-\x09\x0b\x0c\x0e-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@/;
          return (
            beforeAtRegex.test(value) ||
            "電子郵件地址 '@' 前方不應包含空白或非法字符"
          );
        },
        length: (value: string) => {
          if (value.length > 254) return "電子信箱長度不得超過 254 個字符";
          const localPart = value.split("@")[0];
          if (localPart.length > 64) return "@ 前方不得超過 64 個字符";
          return true;
        },
      },
    },
    errorType: "default",
  },
  {
    name: "password",
    label: "密碼",
    type: "password",
    validation: {
      required:
        "密碼長度必須至少 8 個字符，並且包含 1 個大寫英文字母、1 個小寫英文字母和 1 個數字。",
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
        message:
          "密碼長度必須至少 8 個字符，並且包含 1 個大寫英文字母、1 個小寫英文字母和 1 個數字。",
      },
      validate: {
        // NIST SP 800-63B 標準
        length: (value: string) => {
          if (value.length > 64) return "密碼長度不得超過 64 個字元";
          return true;
        },
      },
    },
    errorType: "password",
  },
  {
    name: "passwordConfirm",
    label: "確認密碼",
    type: "password",
    validation: {
      required: "請輸入確認密碼",
      validate: (value: string, formValues: Record<string, any>) =>
        value === formValues.password || "與上方密碼不一致",
    },
    errorType: "default",
  },
];
