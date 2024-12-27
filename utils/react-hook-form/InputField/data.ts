import { ColorsType } from "@/types/uiProps";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type InputField<T extends FieldValues> = {
  name: Path<T>;
  type: "email" | "password" | "text" | "tel";
  placeholder: string;
  $color: ColorsType;
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
}