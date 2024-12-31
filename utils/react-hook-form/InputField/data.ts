import { ColorsType, type Color } from "@/types/uiProps";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type InputField<T extends FieldValues> = Color & {
  name: Path<T>;
  type: "email" | "password" | "text" | "tel";
  placeholder: string;
  $fontSize: number;
  $borderColor: ColorsType;
  $backgroundColor: ColorsType;
  $padding: string;
  register: UseFormRegister<T>;
  required: string;
  validate?: {
    domain?: (value: string) => string | boolean;
    local?: (value: string) => string | boolean;
    length?: (value: string) => string | boolean;
  };
};