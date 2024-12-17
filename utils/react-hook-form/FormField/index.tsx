import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import {
  InputWrapper,
  InputField,
  Label,
  PasswordInputField,
  TogglePassword,
} from "./styled";
import { FormError } from "@/utils/react-hook-form/FormError";
import { RegisterField } from "../types";

import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

export type InputFieldProps = {
  $isError?: boolean;
  $isValid?: boolean;
};

export type FormFieldProps<T extends FieldValues> = {
  field: RegisterField<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  dirtyFields: Partial<Record<keyof T, boolean>>;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
};

const FormField = <T extends FieldValues>({
  field,
  register,
  errors,
  dirtyFields,
  showPassword,
  setShowPassword,
}: FormFieldProps<T>) => {
  return (
    <>
      <InputWrapper>
        {field.type === "password" ? (
          <>
            <TogglePassword
              role="button"
              aria-label={showPassword ? "隱藏密碼" : "顯示密碼"}
              onClick={() => setShowPassword?.(!showPassword)}
            >
              {showPassword ? (
                <IoEyeSharp size={24} />
              ) : (
                <IoEyeOffSharp size={24} />
              )}
            </TogglePassword>
            <PasswordInputField
              type={showPassword ? "text" : "password"}
              placeholder=" "
              $isError={!!errors[field.name]}
              $isValid={!errors[field.name] && dirtyFields[field.name]}
              {...register(field.name, field.validation)}
            />
          </>
        ) : (
          <InputField
            type={field.type}
            placeholder=" "
            $isError={!!errors[field.name]}
            $isValid={!errors[field.name] && dirtyFields[field.name]}
            {...register(field.name, field.validation)}
          />
        )}
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
