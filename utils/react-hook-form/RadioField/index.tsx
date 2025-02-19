import { ReactNode } from "react";
import { RadioGroup, RadioControl, AccessibleInput, RadioText } from "./styled";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { useController, Control, Path } from "react-hook-form";
import { FormValuesProps } from "../InputField/data";
import { RadioSize } from "@/constants/iconSize";

export type BaseRadioType<T extends keyof FormValuesProps> = {
  id: string;
  value: string;
  field: {
    name: Path<FormValuesProps[T]>;
    validation: {
      required: string;
    };
  };
  children: ReactNode;
};

type RadioFieldProps<T extends keyof FormValuesProps> = BaseRadioType<T> & {
  control: Control<FormValuesProps[T]>;
  onChange: (value: string) => void;
};

const RadioField = <T extends keyof FormValuesProps>({
  id,
  value,
  control,
  field,
  children,
  onChange,
}: RadioFieldProps<T>) => {
  const {
    field: { onChange: fieldOnChange, value: fieldValue },
  } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  const isChecked = fieldValue === value;

  const handleChange = () => {
    fieldOnChange(value);
    onChange && onChange(value);
  };

  return (
    <RadioGroup>
      <RadioControl>
        <AccessibleInput
          type="radio"
          value={value}
          id={id}
          checked={isChecked}
          onChange={handleChange}
        />
        {isChecked ? (
          <MdRadioButtonChecked size={RadioSize.regular} />
        ) : (
          <MdRadioButtonUnchecked size={RadioSize.regular} />
        )}
      </RadioControl>
      {children && <RadioText htmlFor={id}>{children}</RadioText>}
    </RadioGroup>
  );
};

export default RadioField;
