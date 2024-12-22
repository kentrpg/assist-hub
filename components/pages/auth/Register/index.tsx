import { useState, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import { Container, Title, Form } from "../Layout/styled";

import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import FormField from "@/utils/react-hook-form/FloatingLabel";
import { RegisterField } from "@/utils/react-hook-form/types";
import { registerFields, RegistInputs } from "./data";
import { signUp } from "@/utils/api/auth/register";
import { AuthButton } from "@/components/ui/buttons";

const Regist: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<RegistInputs>({
    mode: "onChange",
    defaultValues: {
      password: "",
    },
  });

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    passwordConfirm: false,
  });

  const togglePassword = (field: keyof typeof showPasswords) => {
    // TBD: useState set function 防呆是否正確
    setShowPasswords((prev) => {
      const newValue = !prev[field];
      if (prev[field] === newValue) return prev;
      return {
        ...prev,
        [field]: newValue,
      };
    });
  };

  const router = useRouter();

  const onSubmit: SubmitHandler<RegistInputs> = async (data) => {
    try {
      const response = await signUp({
        email: data.email,
        password: data.password,
        nickname: data.name,
      });

      switch (response.status) {
        case 201:
          router.push("/auth/signin");
          break;
        case 422:
          setError("email", { message: response.message || "請求錯誤" });
          break;
        default:
          setError("email", { message: "系統錯誤，請稍後再試" });
          break;
      }
    } catch (error) {
      console.error("註冊錯誤:", error);
    }
  };

  return (
    <Container>
      <Title>註冊</Title>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        {registerFields.map((field: RegisterField<RegistInputs>) => (
          <Fragment key={field.name}>
            <FormField
              field={field}
              register={register}
              errors={errors}
              dirtyFields={dirtyFields}
              showPassword={
                showPasswords[field.name as keyof typeof showPasswords]
              }
              setShowPassword={() =>
                togglePassword(field.name as keyof typeof showPasswords)
              }
            />
          </Fragment>
        ))}
        <AuthButton
          type="submit"
          disabled={isSubmitting || Object.keys(errors).length !== 0}
        >
          {isSubmitting ? <LoaderSpinner /> : "註冊帳號"}
        </AuthButton>
      </Form>
    </Container>
  );
};

export default Regist;
