import { ReactNode } from "react";
import LinnPayImage from "./LinnPayImage";
import { BaseRadioType as RadioProps } from "@/utils/react-hook-form/RadioField";
import { ErrorMessageProps } from "@/utils/react-hook-form/ErrorMessageField";
import { InfoLink } from "@/utils/link";
import { BaseCheckboxType } from "@/utils/react-hook-form/CheckboxField";
import { FieldValues, Path } from "react-hook-form";
import { InputFieldAutofill, InputFieldShadow } from "@/styles/effect";
import {
  Autofill,
  Color,
  ColorsType,
  FontSize,
  Padding,
  Shadow,
} from "@/types/uiProps";

export type LabeledValue = {
  label: string;
  value: number;
};

export type PaymentMethodValue = "credit-card" | "transfer" | "line-pay" | "";
export type PickupMethodValue = "store" | "delivery" | "";
const defaultPayment: PaymentMethodValue = "line-pay";
const defaultPickupMethod: PickupMethodValue = "delivery";

// 收件人資訊型別
export type RecipientInfo = {
  name: string;
  phone: string;
  email: string;
};

// Shipping
export const pickupRadios: RadioProps<CheckoutFormData>[] = [
  {
    id: "pickupMethod-store",
    value: "store",
    field: {
      name: "pickupMethod",
      validation: {
        required: "請選擇取貨方式",
      },
    },
    $gap: 12,
    $fontSize: 16,
    $checkedColor: "primary",
    $uncheckedColor: "primary",
    $labelColor: "textSecondary",
    children: "店取",
  },
  {
    id: "pickupMethod-delivery",
    value: "delivery",
    field: {
      name: "pickupMethod",
      validation: {
        required: "請選擇取貨方式",
      },
    },
    $gap: 12,
    $fontSize: 16,
    $checkedColor: "primary",
    $uncheckedColor: "primary",
    $labelColor: "textSecondary",
    children: "自取",
  },
];

// Payment

type PaymentMethod = {
  id: string;
  value: PaymentMethodValue;
  icon: string | ReactNode;
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: "credit-card",
    value: "credit-card",
    icon: "信用卡/簽帳金融卡",
  },
  {
    id: "transfer",
    value: "transfer",
    icon: "銀行匯款或轉帳",
  },
  {
    id: "line-pay",
    value: "line-pay",
    icon: <LinnPayImage />,
  },
];

// Summary

export type SummaryProps = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  details: {
    label: string;
    value: string | number;
  }[];
};

// Term
export const checkboxData: BaseCheckboxType<CheckoutFormData>[] = [
  {
    id: "agreeRentalRules",
    field: {
      name: "agreeRentalRules",
      validation: {
        required: "請同意租賃輪具規則",
      },
    },
    $isRequired: true,
    $gap: 10,
    $fontSize: 16,
    $checkedColor: "primary",
    $uncheckedColor: "primary",
    $labelColor: "textSecondary",
    children: (
      <>
        我已閱讀並同意此網站之
        <InfoLink href="#">租賃輪具規則</InfoLink>
      </>
    ),
  },
  {
    id: "agreeTermsPrivacy",
    field: {
      name: "agreeTermsPrivacy",
      validation: {
        required: "請同意服務條款及隱私權政策",
      },
    },
    $isRequired: true,
    $gap: 10,
    $fontSize: 16,
    $checkedColor: "primary",
    $uncheckedColor: "primary",
    $labelColor: "textSecondary",
    children: (
      <>
        我同意網站<InfoLink href="#">服務條款</InfoLink>及
        <InfoLink href="#">隱私權政策</InfoLink>
      </>
    ),
  },
];

// Checkout Form
export type CheckoutFormData = {
  pickupMethod: PickupMethodValue;
  paymentMethod: PaymentMethodValue;
  name: string;
  phone: string;
  email: string;
  zipCode?: string;
  city?: string;
  district?: string;
  address?: string;
  agreeRentalRules: boolean;
  agreeTermsPrivacy: boolean;
};

export const defaultFormValues: CheckoutFormData = {
  // pickupMethod: defaultPickupMethod,
  // paymentMethod: defaultPayment,
  pickupMethod: "",
  paymentMethod: "",
  name: "",
  phone: "",
  email: "",
  zipCode: "",
  city: "",
  district: "",
  address: "",
  agreeRentalRules: false,
  agreeTermsPrivacy: false,
};

// ErrorMessage
export const errorMessages: ErrorMessageProps<CheckoutFormData>[] = [
  {
    name: "pickupMethod",
    $margin: "0",
  },
  {
    name: "paymentMethod",
    $margin: "-14px",
  },
  {
    name: "name",
    $margin: "-4px",
  },
  {
    name: "phone",
    $margin: "-4px",
  },
  {
    name: "email",
    $margin: "-4px",
  },
  {
    name: "agreeRentalRules",
    $margin: "-2px",
  },
  {
    name: "agreeTermsPrivacy",
    $margin: "-2px",
  },
];

// 在檔案開頭加入型別定義
// export type BaseInputFieldType<T extends FieldValues> = Parameters<typeof InputField<T>>[0];

export type BaseInputFieldType<T extends FieldValues> = Padding &
  Color &
  FontSize &
  Autofill &
  Shadow & {
    name: Path<T>;
    type: "email" | "password" | "text" | "tel";
    placeholder: string;
    $borderColor: ColorsType;
    $backgroundColor: ColorsType;
    required: string;
    validate?: {
      notEmpty?: (value: string) => string | boolean;
      pattern?: (value: string) => string | boolean;
      domain?: (value: string) => string | boolean;
      local?: (value: string) => string | boolean;
      length?: (value: string) => string | boolean;
    };
  };

// 在適當位置加入以下資料結構
export const storePickupInputFields: BaseInputFieldType<CheckoutFormData>[] = [
  {
    name: "name",
    type: "text",
    placeholder: "王小姐",
    $color: "textSecondary",
    $fontSize: 16,
    $borderColor: "border",
    $backgroundColor: "secondaryBg",
    $autofill: InputFieldAutofill,
    $shadow: InputFieldShadow,
    $padding: "8px 16px",
    required: "請輸入姓名",
    validate: {
      notEmpty: (value: string) => {
        if (!value || value.trim() === "") {
          return "請正確輸入姓名";
        }
        return true;
      },
    },
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "0912345678",
    $color: "textSecondary",
    $fontSize: 16,
    $borderColor: "border",
    $backgroundColor: "secondaryBg",
    $autofill: InputFieldAutofill,
    $shadow: InputFieldShadow,
    $padding: "8px 16px",
    required: "請輸入手機號碼",
    validate: {
      notEmpty: (value: string) => {
        if (!value || value.trim() === "") {
          return "請正確輸入手機號碼";
        }
        return true;
      },
      pattern: (value: string) =>
        /^09\d{8}$/.test(value) || "請輸入有效的手機號碼格式",
    },
  },
  {
    name: "email",
    type: "email",
    placeholder: "A12345678@gmail.com",
    $color: "textSecondary",
    $fontSize: 16,
    $borderColor: "border",
    $backgroundColor: "secondaryBg",
    $autofill: InputFieldAutofill,
    $shadow: InputFieldShadow,
    $padding: "8px 16px",
    required: "請輸入電子郵件",
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
  },
];
