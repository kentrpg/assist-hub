import { FieldErrors, FieldValues, Path } from "react-hook-form";
import { ErrorMessage } from "@/utils/react-hook-form/FormError/styled";

export type ErrorMessageProps<T> = {
  name: Path<T>;
  $margin: string;
};

type ErrorMessageFieldProps<T extends FieldValues> = ErrorMessageProps<T> & {
  errors: FieldErrors<T>;
};

export const ErrorMessageField = <T extends FieldValues>({
  name,
  errors,
  $margin,
}: ErrorMessageFieldProps<T>) => {
  return errors[name] ? (
    <ErrorMessage $margin={$margin}>
      {String(errors[name].message)}
    </ErrorMessage>
  ) : null;
};
