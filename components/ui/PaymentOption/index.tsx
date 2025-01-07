import { ReactNode } from "react";
import {
  CheckedStateIcon,
  PaymentOptionField,
  PaymentOptionInput,
} from "./styled";
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { PaymentMethodValue } from "@/components/pages/cart/Checkout/data";
import { BaseField } from "@/utils/react-hook-form/types";

type PaymentOptionProps<T extends FieldValues> = {
  value: PaymentMethodValue;
  children: ReactNode;
  register: UseFormRegister<T>;
  field: BaseField<T>;
} & Partial<UseFormRegisterReturn>;

const PaymentOption = <T extends FieldValues>({
  value,
  children,
  register,
  field,
}: PaymentOptionProps<T>) => {
  return (
    <PaymentOptionField>
      <PaymentOptionInput
        type="radio"
        value={value}
        {...register(field.name, field.validation)}
      />
      <CheckedStateIcon />
      {children}
    </PaymentOptionField>
  );
};

export default PaymentOption;
