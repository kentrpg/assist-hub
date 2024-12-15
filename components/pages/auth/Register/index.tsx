import { useState, useEffect, useRef, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useRouter } from "next/router";
import {
  Container,
  Title,
  Form,
  Label,
  InputField,
  InputWrapper,
  PasswordErrorMessage,
  ErrorMessage,
} from "../Layout/styled";
import { SubmitButton } from "@/components/ui/Button";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import { registerFields, Inputs, SignInResponse, RegisterField } from "./data";

const Regist: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    watch,
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: {
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const signUp = `${process.env.NEXT_PUBLIC_BASE_URL}/users/sign_up`;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
      console.log(response);
      const result: SignInResponse = await response.json();

      // if (!result.token) {
      //   throw new Error("無效的登入 Token");
      // }

      if (!response.ok) {
        throw new Error(result.message || "登入失敗");
      } else {
        router.push("/auth/signin");
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

  const renderErrorMessage = (field: RegisterField) => {
    switch (field.errorType) {
      case "password":
        return (
          <PasswordErrorMessage
            $isError={!!errors.password}
            $isValid={!errors.password && dirtyFields.password}
          >
            {field.validation.required}
          </PasswordErrorMessage>
        );
      case "default":
        return (
          errors[field.name] && (
            <ErrorMessage>{errors[field.name]?.message}</ErrorMessage>
          )
        );
    }
  };

  return (
    <Container>
      <Title>註冊</Title>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        {registerFields.map((field: RegisterField) => (
          <Fragment key={field.name}>
            <InputWrapper>
              <InputField
                type={field.type}
                {...register(field.name, field.validation)}
                placeholder=" "
                $isError={!!errors[field.name]}
                $isValid={!errors[field.name] && dirtyFields[field.name]}
              />
              <Label htmlFor={String(field.name)}>{field.label}</Label>
            </InputWrapper>
            {renderErrorMessage(field)}
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
