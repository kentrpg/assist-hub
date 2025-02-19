import { FieldErrors, FieldValues, Path } from "react-hook-form";
import { ErrorMessage, PasswordErrorMessage } from "./styled";

export type FormErrorProps<T extends FieldValues> = {
  $margin: string;
  name: Path<T>;
  errorType: "password" | "default";
  errors: FieldErrors<T>;
  dirtyFields: Partial<Record<keyof T, boolean>>;
  validation?: {
    required?: string;
  };
};

export const FormError = <T extends FieldValues>({
  $margin = "4px",
  name,
  errorType,
  errors,
  dirtyFields,
  validation,
}: FormErrorProps<T>) => {
  switch (errorType) {
    case "password":
      const isPasswordInvalid = Boolean(errors[name]?.message);
      const isInitialState = !isPasswordInvalid && !dirtyFields[name];

      if (isPasswordInvalid || isInitialState) {
        return (
          <PasswordErrorMessage $isDefault={!isPasswordInvalid}>
            {isPasswordInvalid
              ? String(errors[name]?.message)
              : validation?.required}
          </PasswordErrorMessage>
        );
      }
      return null;
    case "default":
      return errors[name] ? (
        <ErrorMessage $margin={$margin}>{String(errors[name].message)}</ErrorMessage>
      ) : null;
    default:
      return null;
  }
};
