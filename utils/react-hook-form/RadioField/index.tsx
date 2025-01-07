import { ReactNode } from "react";
import { RadioGroup, RadioControl, AccessibleInput, RadioText } from "./styled";
import { ColorsType } from "@/types/uiProps";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { FieldValues, useController, Control } from "react-hook-form";
import { BaseField } from "@/utils/react-hook-form/types";
import { RadioSize } from "@/constants/iconSize";

export type BaseRadioType<T extends FieldValues> = {
  id: string;
  value: string;
  field: BaseField<T>;
  $gap: number;
  $fontSize: number;
  $checkedColor: ColorsType;
  $uncheckedColor: ColorsType;
  $labelColor: ColorsType;
  children: ReactNode;
};

type RadioFieldProps<T extends FieldValues> = BaseRadioType<T> & {
  control: Control<T>;
};

const RadioField = <T extends FieldValues>({
  id,
  value,
  control,
  field,
  $gap = 12,
  $fontSize = 16,
  $checkedColor = "textMuted",
  $uncheckedColor = "textMuted",
  $labelColor = "textMuted",
  children,
}: RadioFieldProps<T>) => {
  const {
    field: { onChange, value: fieldValue },
  } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  const isChecked = fieldValue === value;

  return (
    <RadioGroup $gap={$gap}>
      <RadioControl
        $size={RadioSize.regular}
        $color={isChecked ? $checkedColor : $uncheckedColor}
      >
        <AccessibleInput
          type="radio"
          value={value}
          id={id}
          checked={isChecked}
          onChange={() => onChange(value)}
        />
        {isChecked ? (
          <MdRadioButtonChecked size={RadioSize.regular} />
        ) : (
          <MdRadioButtonUnchecked size={RadioSize.regular} />
        )}
      </RadioControl>
      {children && (
        <RadioText $fontSize={$fontSize} $color={$labelColor} htmlFor={id}>
          {children}
        </RadioText>
      )}
    </RadioGroup>
  );
};

export default RadioField;
