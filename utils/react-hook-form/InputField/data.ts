import { Path, UseFormRegister, Validate, FieldValues } from "react-hook-form";

export type FormValuesProps = {
  signin: {
    email: string;
    password: string;
    remember: boolean;
  },
  newsletter: {
    email: string;
    isSubscribed: boolean;
  },
  checkout: {
    method: "store" | "delivery" | "";
    payment: "creditCard" | "transfer" | "LinePay" | "";
    name: string;
    phone: string;
    email: string;
    addressZIP: string;
    addressCity: string;
    addressDistrict: string;
    addressDetail: string;
    agreeRentalRules: boolean;
    agreeTermsPrivacy: boolean;
  },
};

export type InputFieldVariant = 'default' | 'checkout';

type FormFieldNames = {
  newsletter: "email";
  checkout: "email" | "name" | "phone";
  signin: "email" | "password";
};

type InputFieldTypes = "email" | "password" | "text" | "tel";

export type FieldError = keyof FormValuesProps["newsletter"] | keyof FormValuesProps["checkout"];

export type InputFieldProps<T extends keyof FormValuesProps> = {
  id: string;
  name: FormFieldNames[T];
  type: InputFieldTypes;
  placeholder: string;
  required: string;
  validate: ValidateProps;
};

export type InputFieldValues<T extends keyof FormValuesProps> = {
  id: string;
  name: Path<FormValuesProps[T]>;
  type: InputFieldTypes;
  placeholder: string;
  required?: string;
  register: UseFormRegister<FormValuesProps[T]>;
  validate?: ValidateProps;
  variant?: InputFieldVariant;
};

export type InputFieldData<T extends keyof FormValuesProps> = Omit<InputFieldValues<T>, 'register'>;

type RadioFieldProps = {
  id: string;
  value: string;
  field: {
    name: "method";
    validation: {
      required: string;
    };
  };
  label: "店取" | "自取";
};

type ZipCodeFieldProps = {
  id: string;
  name: "addressZIP";
  type: "text";
  placeholder: string;
  required: string;
  validate?: "zipCode";
};

type CityFieldProps = {
  id: string;
  name: "addressCity";
  required: string;
  options: string[];
};

type DistrictFieldProps = {
  id: string;
  name: "addressDistrict";
  required: string;
  options: string[];
};

type AddressDetailFieldProps = {
  id: string;
  name: "addressDetail";
  type: "text";
  placeholder: string;
  required: string;
};

export const FormValuesData: {
  email: InputFieldProps<"newsletter">;
  name: InputFieldProps<"checkout">;
  phone: InputFieldProps<"checkout">;
  radio: RadioFieldProps;
  zipCode: ZipCodeFieldProps;
  city: CityFieldProps;
  district: DistrictFieldProps;
  addressDetail: AddressDetailFieldProps;
} = {
  email: {
    id: "email",
    name: "email",
    type: "tel",
    placeholder: "請輸入電子信箱",
    required: "請輸入電子信箱",
    validate: "email",
  },
  name: {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "王小明",
    required: "請輸入姓名",
    validate: "notEmpty",
  },
  phone: {
    id: "phone",
    name: "phone",
    type: "tel",
    placeholder: "0912345678",
    required: "請輸入手機",
    validate: "phone",
  },
  radio: {
    id: "pickupMethod-store",
    value: "store",
    field: {
      name: "method",
      validation: {
        required: "請選擇取貨方式",
      },
    },
    label: "店取",
  },
  zipCode: {
    id: "zipCode",
    name: "addressZIP",
    type: "text",
    placeholder: "800",
    required: "請輸入郵遞區號",
    // validate: "zipCode",
  },
  city: {
    id: "city",
    name: "addressCity",
    required: "請選擇縣市",
    options: ["高雄市", "台北市", "台中市", "台南市", "新北市", "桃園市", "基隆市", "新竹市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "台東縣", "澎湖縣", "金門縣", "連江縣"],
  },
  district: {
    id: "district",
    name: "addressDistrict",
    required: "請選擇區域",
    options: ["新興區", "前鎮區", "苓雅區", "鹽埕區", "鼓山區", "旗津區", "前金區", "楠梓區", "三民區", "左營區", "小港區"],
  },
  addressDetail: {
    id: "address",
    name: "addressDetail",
    type: "text",
    placeholder: "請輸入詳細地址",
    required: "請輸入詳細地址",
  },
}

export const FieldInputLabelMapping = {
  name: "姓名",
  phone: "手機",
  email: "電子郵件",
};

export type ValidateFunction<TFieldValues extends FieldValues = FieldValues> = Validate<
  string | boolean,
  TFieldValues
>;

export const ValidateFunctionData = {
  notEmpty: ((value: string | boolean) => {
    if (typeof value !== "string" || !value || value.trim() === "") {
      return "請勿輸入空白";
    }
    return true;
  }) as ValidateFunction,
  
  email: {
    domain: ((value: string | boolean) => {
      if (typeof value !== "string") return "請輸入有效的電子郵件";
      const domainRegex = /@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return domainRegex.test(value) || "請輸入有效的電子郵件域名";
    }) as ValidateFunction,
    
    local: ((value: string | boolean) => {
      if (typeof value !== "string") return "請輸入有效的電子郵件";
      const beforeAtRegex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x01-\x09\x0b\x0c\x0e-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@/;
      return beforeAtRegex.test(value) || "電子郵件地址 '@' 前方不應包含空白或非法字符";
    }) as ValidateFunction,
    
    length: ((value: string | boolean) => {
      if (typeof value !== "string") return "電子信箱長度不得超過 254 個字符";
      const localPart = value.split("@")[0];
      if (localPart.length > 64) return "@ 前方不得超過 64 個字符";
      return true;
    }) as ValidateFunction,
  },
  
  phone: {
    notEmpty: ((value: string | boolean) => {
      if (typeof value !== "string" || !value || value.trim() === "") {
        return "請勿輸入空白";
      }
      return true;
    }) as ValidateFunction,
    
    pattern: ((value: string | boolean) => {
      if (typeof value !== "string") return "請輸入有效的手機號碼格式";
      return /^09\d{8}$/.test(value) || "請輸入有效的手機號碼格式";
    }) as ValidateFunction,
  },
  
  zipCode: {
    pattern: ((value: string | boolean) => {
      if (typeof value !== "string") return "請重新確認";
      return /^\d{3,6}$/.test(value) || "請重新確認";
    }) as ValidateFunction,
  },
} as const;

export type ValidateProps = keyof typeof ValidateFunctionData;
