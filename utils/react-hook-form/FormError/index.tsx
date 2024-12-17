import { ErrorType } from "../types";
import { ErrorMessage, PasswordErrorMessage } from "./styled";

export type FormErrorProps = {
  name: string;
  errorType: ErrorType;
  errors: Record<string, any>;
  dirtyFields: Record<string, any>;
  validation?: {
    required?: string;
  };
};

export const FormError: React.FC<FormErrorProps> = ({
  name,
  errorType,
  errors,
  dirtyFields,
  validation,
}) => {
  switch (errorType) {
    case "password":
      return (
        <PasswordErrorMessage
          $isDefault={
            dirtyFields.password === undefined ? true : !errors.password
          }
        >
          {dirtyFields.password === undefined
            ? validation?.required
            : errors.password?.message}
        </PasswordErrorMessage>
      );
    case "default":
      return errors[name] ? (
        <ErrorMessage>{errors[name]?.message}</ErrorMessage>
      ) : null;
    default:
      return null;
  }
};
