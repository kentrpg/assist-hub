import { Autofill, ColorsType, Padding, Shadow, type Color } from "@/types/uiProps";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type InputField<T extends FieldValues> = Color &
  Autofill &
  Shadow &
  Padding & {
    name: Path<T>;
    type: "email" | "password" | "text" | "tel";
    placeholder: string;
    $fontSize: number;
    $borderColor: ColorsType;
    $backgroundColor: ColorsType;
    register: UseFormRegister<T>;
    required: string;
    validate?: {
      notEmpty?: (value: string) => string | boolean;
      pattern?: (value: string) => string | boolean;
      domain?: (value: string) => string | boolean;
      local?: (value: string) => string | boolean;
      length?: (value: string) => string | boolean;
    };
};