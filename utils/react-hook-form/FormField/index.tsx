import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import { InputWrapper, InputField, Label } from "./styled";
import { FormError } from "@/utils/react-hook-form/FormError";
import { RegisterField } from "../types";

export type InputFieldProps = {
  $isError?: boolean;
  $isValid?: boolean;
};

export type FormFieldProps<T extends FieldValues> = {
  field: RegisterField<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  dirtyFields: Partial<Record<keyof T, boolean>>;
};

const FormField = <T extends FieldValues>({
  field,
  register,
  errors,
  dirtyFields,
}: FormFieldProps<T>) => {
  return (
    <>
      <InputWrapper>
        <InputField
          type={field.type}
          placeholder=" "
          $isError={!!errors[field.name]}
          $isValid={!errors[field.name] && dirtyFields[field.name]}
          {...register(field.name, field.validation)}
        />
        <Label htmlFor={String(field.name)}>{field.label}</Label>
      </InputWrapper>
      <FormError
        name={field.name}
        errorType={field.errorType}
        errors={errors}
        dirtyFields={dirtyFields}
        validation={field.validation}
      />
    </>
  );
};
export default FormField;