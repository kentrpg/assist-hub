import { Autofill, ColorsType, Padding, Shadow, type Color, FontSize } from "@/types/uiProps";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { FooterAutofill, FooterShadow } from "@/styles/effect";

// 基礎 InputField 型別定義，data 中排除 register，統一由 component instance 傳入
export type InputField<T extends FieldValues> = Color &
  Autofill &
  Shadow &
  Padding &
  FontSize & {
    name: Path<T>;
    type: "email" | "password" | "text" | "tel";
    placeholder: string;
    $borderColor: ColorsType;
    $backgroundColor: ColorsType;
    register: UseFormRegister<T>;
    required?: string;
    validate?: {
      notEmpty?: (value: string) => string | boolean;
      pattern?: (value: string) => string | boolean;
      domain?: (value: string) => string | boolean;
      local?: (value: string) => string | boolean;
      length?: (value: string) => string | boolean;
    };
};

export const FieldInputLabelMapping = {
  name: "姓名",
  phone: "手機",
  email: "電子郵件",
};

// Footer

export type NewsletterForm = {
  email: string;
  isSubscribed: boolean;
};

type InputFieldData<T extends FieldValues> = Omit<InputField<T>, 'register'>;

export const footerInputField: InputFieldData<NewsletterForm> = {
  name: "email",
  type: "tel",
  placeholder: "輸入電子信箱",
  $color: "grey300",
  $fontSize: 14,
  $borderColor: "grey300",
  $backgroundColor: "grey100",
  $autofill: FooterAutofill,
  $shadow: FooterShadow,
  $padding: "7px 34px 7px 10px",
  required: "請輸入電子信箱",
  validate: {
    domain: (value: string) => {
      const domainRegex = /@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return domainRegex.test(value) || "請輸入有效的電子郵件域名";
    },
    local: (value: string) => {
      const beforeAtRegex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x01-\x09\x0b\x0c\x0e-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@/;
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
};
