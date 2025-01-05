import { ReactNode } from "react";
import {
  CheckedStateIcon,
  PaymentOptionField,
  PaymentOptionInput,
} from "./styled";

type PaymentOptionProps = {
  id: string;
  name: "payment";
  value: "credit-card" | "transfer" | "line-pay";
  defaultChecked: boolean;
  onChange: (value: string) => void;
  children: ReactNode;
};

const PaymentOption: React.FC<PaymentOptionProps> = ({
  id,
  name,
  value,
  defaultChecked,
  onChange,
  children,
}) => {
  return (
    <PaymentOptionField>
      <PaymentOptionInput
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={() => onChange(value)}
      />
      <CheckedStateIcon />
      {children}
    </PaymentOptionField>
  );
};

export default PaymentOption;
