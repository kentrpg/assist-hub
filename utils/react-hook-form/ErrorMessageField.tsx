import { FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@/utils/react-hook-form/FormError/styled";
import { FieldError } from "./InputField/data";

export type ErrorMessageProps = {
  name: FieldError;
  $margin: string;
};

type ErrorMessageFieldProps = ErrorMessageProps & {
  errors: FieldErrors;
};

const ErrorMessageField = ({
  name,
  errors,
  $margin,
}: ErrorMessageFieldProps) => {
  if (!errors[name]?.message) return null;

  return (
    <ErrorMessage $margin={$margin}>
      {String(errors[name].message)}
    </ErrorMessage>
  );
};

export default ErrorMessageField;
