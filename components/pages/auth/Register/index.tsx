import { useState, useEffect, useRef, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import { Container, Title, Form } from "../Layout/styled";
import { SubmitButton } from "@/components/ui/Button";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import FormField from "@/utils/react-hook-form/FormField";
import { RegisterField } from "@/utils/react-hook-form/types";
import { registerFields, RegistResponse, RegistInputs } from "./data";

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
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const signUp = `${process.env.NEXT_PUBLIC_BASE_URL}/users/sign_up`;

  const onSubmit: SubmitHandler<RegistInputs> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(signUp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          nickname: data.name,
        }),
      });

      const result: RegistResponse = await response.json();

      response.ok && response.status === 201 && router.push("/auth/signin");

      if (result.message === "用戶已存在") {
        setError("email", { message: "此 email 已被註冊" });
      } else if (Array.isArray(result.message)) {
        setError("email", { message: result.message[0] });
      } else if (result.message) {
        setError("email", { message: result.message });
      }
    } catch (error) {
      console.error("登入錯誤:", error);
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
