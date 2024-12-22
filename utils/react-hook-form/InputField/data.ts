import { ScaleColors, ThemeColors } from "@/types/uiProps";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type InputField<T extends FieldValues> = {
  name: Path<T>;
  type: "email" | "password" | "text" | "tel";
  placeholder: string;
  $color: ScaleColors | ThemeColors;
  $fontSize: number;
  $borderColor: ScaleColors | ThemeColors;
  $backgroundColor: ScaleColors | ThemeColors;
  $padding: string;
  register: UseFormRegister<T>;
  required: string;
  validate?: {
    domain?: (value: string) => string | boolean;
    local?: (value: string) => string | boolean;
    length?: (value: string) => string | boolean;
  };
}