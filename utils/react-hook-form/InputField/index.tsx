import { InputFieldValues, FormValuesProps, ValidateFunction } from "./data";
import { CheckoutInputField, InputFieldStyle } from "./styled";
import { ValidateFunctionData } from "./data";
import { RegisterOptions } from "react-hook-form";

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

  const getValidationRules = (): RegisterOptions<
    FormValuesProps[T],
    typeof name
  > => {
    const rules: RegisterOptions<FormValuesProps[T], typeof name> = {};

    if (required) {
      rules.required = required;
    }

    if (validate) {
      const validateFn = ValidateFunctionData[validate];
      if (typeof validateFn === "function") {
        rules.validate = validateFn as ValidateFunction<FormValuesProps[T]>;
      } else if (typeof validateFn === "object") {
        rules.validate = validateFn as Record<
          string,
          ValidateFunction<FormValuesProps[T]>
        >;
      }
    }

    return rules;
  };

  return (
    <InputComponent
      id={id}
      type={type}
      placeholder={placeholder}
      {...register(name, getValidationRules())}
    />
  );
};

export default InputField;
