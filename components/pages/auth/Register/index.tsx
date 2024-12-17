import { useState, useEffect, useRef, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import { Container, Title, Form } from "../Layout/styled";
import { SubmitButton } from "@/components/ui/Button";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import FormField from "@/utils/react-hook-form/FormField";
import { RegisterField } from "@/utils/react-hook-form/types";
import { registerFields, RegistInputs } from "./data";
import { signUp } from "@/utils/api/auth/register";

const Regist: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields },
  } = useForm<RegistInputs>({
    mode: "onChange",
    defaultValues: {
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    passwordConfirm: false,
  });
  const togglePassword = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const onSubmit: SubmitHandler<RegistInputs> = async (data) => {
    setLoading(true);
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
        case 400:
          setError("email", { message: response.data.message || "請求錯誤" });
          break;
        default:
          setError("email", { message: "系統錯誤，請稍後再試" });
          break;
      }
    } catch (error) {
      console.error("註冊錯誤:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = timeoutRef.current;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

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
        <SubmitButton type="submit">
          {loading ? <LoaderSpinner /> : "註冊帳號"}
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Regist;
