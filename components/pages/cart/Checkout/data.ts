import { ErrorMessageProps } from "@/utils/react-hook-form/ErrorMessageField";
import { BaseCheckboxType } from "@/utils/react-hook-form/CheckboxField";
import {
  FormValuesData,
  FormValuesProps,
} from "@/utils/react-hook-form/InputField/data";

export type PaymentMethodValue = "creditCard" | "transfer" | "LinePay" | "";
export type PickupMethodValue = "store" | "delivery" | "";

export const defaultFormValues: FormValuesProps["checkout"] = {
  method: "",
  payment: "",
  name: "",
  phone: "",
  email: "",
  addressZIP: "",
  addressCity: "",
  addressDistrict: "",
  addressDetail: "",
  agreeRentalRules: false,
  agreeTermsPrivacy: false,
};

export const errorMessages: ErrorMessageProps[] = [
  {
    name: "method",
    $margin: "0",
  },
  {
    name: "payment",
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
    name: "addressZIP",
    $margin: "-4px",
  },
  {
    name: "addressCity",
    $margin: "-4px",
  },
  {
    name: "addressDistrict",
    $margin: "-4px",
  },
  {
    name: "addressDetail",
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

// Shipping
export const storePickupInputFields = [
  FormValuesData.name,
  {
    ...FormValuesData.phone,
    placeholder: "請輸入手機",
  },
  FormValuesData.email,
];

export const pickupRadios = [
  FormValuesData.radio,
  {
    ...FormValuesData.radio,
    id: "pickupMethod-delivery",
    value: "delivery",
    label: "宅配",
  },
];

// Store
export const store = {
  storeId: 1,
  name: "六角輔具租賃",
  phone: "0912-345678",
  businessHours: "08:00-22:00（週一公休）",
  address: "高雄市新興區",
}

// Payment
type PaymentMethod = {
  id: string;
  value: PaymentMethodValue;
  icon: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: "creditCard",
    value: "creditCard",
    icon: "信用卡/簽帳金融卡",
  },
  {
    id: "transfer",
    value: "transfer",
    icon: "銀行匯款或轉帳",
  },
  {
    id: "linePay",
    value: "LinePay",
    icon: "LinePay",
  },
];

export const agreementInfo: BaseCheckboxType<FormValuesProps["checkout"]>[] = [
  {
    id: "agreeRentalRules",
    field: {
      name: "agreeRentalRules",
      validation: {
        required: "請同意租賃輔具規則",
      },
    },
    $isRequired: true,
    $gap: 10,
    $fontSize: 16,
    $checkedColor: "primary",
    $uncheckedColor: "border",
    $color: "textSecondary",
    link: "租賃輔具規則",
    linkHref: "#",
    label: "我已閱讀並同意此網站之",
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
    $uncheckedColor: "border",
    $color: "textSecondary",
    link: "服務條款",
    linkHref: "#",
    label: "我同意網站",
  },
];
