import { ReactNode } from "react";
import {
  CheckboxGroup,
  CheckboxControl,
  AccessibleInput,
  CheckboxText,
} from "./styled";
import { ColorsType } from "@/types/uiProps";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FieldValues, useController, Control } from "react-hook-form";
import { BaseField } from "@/utils/react-hook-form/types";

export type BaseCheckboxType<T extends FieldValues> = {
  id: string;
  field: BaseField<T>;
  $isRequired?: boolean;
  $gap: number;
  $fontSize: number;
  $checkedColor: ColorsType;
  $uncheckedColor: ColorsType;
  $labelColor: ColorsType;
  children: ReactNode;
};

type CheckboxFieldProps<T extends FieldValues> = BaseCheckboxType<T> & {
  control: Control<T>;
  $fontSize?: number;
};

const CheckboxField = <T extends FieldValues>({
  id,
  control,
  field,
  $gap = 12,
  $isRequired = false,
  $fontSize = 16,
  $checkedColor = "textMuted",
  $uncheckedColor = "textMuted",
  $labelColor = "textMuted",
  children,
}: CheckboxFieldProps<T>) => {
  const {
    field: { onChange, value: isChecked },
  } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  return (
    <CheckboxGroup $gap={$gap}>
      <CheckboxControl
        $size={24}
        $color={isChecked ? $checkedColor : $uncheckedColor}
      >
        <AccessibleInput
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {isChecked ? (
          <MdCheckBox size={24} />
        ) : (
          <MdCheckBoxOutlineBlank size={24} />
        )}
      </CheckboxControl>
      {children && (
        <CheckboxText
          $fontSize={$fontSize}
          $color={$labelColor}
          htmlFor={id}
          $isRequired={$isRequired}
        >
          {children}
        </CheckboxText>
      )}
    </CheckboxGroup>
  );
};

export default CheckboxField;
