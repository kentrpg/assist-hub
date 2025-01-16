import { InputFieldValues, FormValuesProps } from "./data";
import { CheckoutInputField, InputFieldStyle } from "./styled";
import { ValidateFunctionData } from "./data";

const InputField = <T extends keyof FormValuesProps>({
  id,
  name,
  type,
  placeholder,
  register,
  required,
  validate,
  variant = "default",
}: InputFieldValues<T>) => {
  const InputComponent =
    variant === "checkout" ? CheckoutInputField : InputFieldStyle;

  return (
    <InputComponent
      id={id}
      type={type}
      placeholder={placeholder}
      {...register(name, {
        required,
        ...(validate && { validate: ValidateFunctionData[validate] }),
      })}
    />
  );
};

export default InputField;
