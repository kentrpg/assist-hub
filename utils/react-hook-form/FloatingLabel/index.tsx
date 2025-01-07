import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import {
  FloatingLabelWrapper,
  FloatingLabel,
  Label,
  PasswordInputField,
} from "./styled";
import { FormError } from "@/utils/react-hook-form/FormError";
import { RegisterField } from "../types";
import PasswordButton from "@/components/ui/buttons/PasswordButton";

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
}: FormFieldProps<T>): JSX.Element => {
  return (
    <>
      <FloatingLabelWrapper>
        {field.type === "password" ? (
          <>
            <PasswordButton
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <PasswordInputField
              type={showPassword ? "text" : "password"}
              placeholder=" "
              {...register(field.name, field.validation)}
            />
          </>
        ) : (
          <FloatingLabel
            type={field.type}
            placeholder=" "
            {...register(field.name, field.validation)}
          />
        )}
        <Label htmlFor={String(field.name)}>{field.label}</Label>
      </FloatingLabelWrapper>
      <FormError
        $margin="4px"
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
