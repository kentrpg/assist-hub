import { FieldValues } from "react-hook-form";
import { InputField as InputFieldProps } from "./data";
import { InputField as StyledInputField } from "./styled";

const InputField = <T extends FieldValues>({
  name,
  type,
  placeholder,
  $color = "grey300",
  $fontSize = 14,
  $borderColor = "grey300",
  $backgroundColor = "grey100",
  $padding = "7px 34px 7px 10px",
  register,
  required,
  validate,
}: InputFieldProps<T>) => {
  return (
    <StyledInputField
      type={type}
      placeholder={placeholder}
      $color={$color}
      $fontSize={$fontSize}
      $borderColor={$borderColor}
      $backgroundColor={$backgroundColor}
      $padding={$padding}
      {...register(name, {
        required,
        validate,
      })}
    />
  );
};

export default InputField;
