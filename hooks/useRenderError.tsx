import { FieldErrors } from "react-hook-form";
import { FieldError } from "@/utils/react-hook-form/InputField/data";
import ErrorMessageField from "@/utils/react-hook-form/ErrorMessageField";
import { ErrorMessageProps } from "@/utils/react-hook-form/ErrorMessageField";

type UseRenderErrorProps = {
  errors: FieldErrors;
  errorMessages: ErrorMessageProps[];
};

const useRenderError = ({ errors, errorMessages }: UseRenderErrorProps) => {
  const renderError = (name: FieldError) => {
    if (!name || !errors) return null;

    const config = errorMessages.find((msg) => msg.name === name);
    if (!config) {
      console.warn(`No error config found for field: ${name}`);
      return null;
    }

    return (
      <ErrorMessageField name={name} errors={errors} $margin={config.$margin} />
    );
  };

  return { renderError };
};

export default useRenderError;
