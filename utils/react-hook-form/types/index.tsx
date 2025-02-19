import { FieldValues, Path } from "react-hook-form";

export type ErrorType = "default" | "password";

export type RegisterField<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type: string;
  validation?: FieldValues;
  errorType: ErrorType;
};

export type BaseField<T extends FieldValues> = {
  name: Path<T>;
  validation?: FieldValues;
};
