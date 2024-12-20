import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useRouter } from "next/router";
import {
  Container,
  Title,
  Form,
  Label,
  InputField,
  InputWrapper,
  ErrorMessage,
} from "./styled";
import { SubmitButton } from "@/components/ui/Buttons";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";

type SignInResponse = {
  status: boolean;
  token: string;
  message?: string;
};

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const Regist: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm<Inputs>();

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

      if (!response.ok) {
        throw new Error(result.message || "登入失敗");
      } else {
        // router.push("/auth/signin");
        router.push({
          pathname: "/auth/[method]",
          query: { method: "signin" },
        });
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
    <>
      <Container>
        <Title>註冊</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <InputField
              {...register("name", { required: "請填寫正確" })}
              data-has-value={!!watch("name")}
            />
            <Label htmlFor="name">姓名</Label>
          </InputWrapper>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

          <InputWrapper>
            <InputField
              type="email"
              {...register("email", { required: "電子信箱錯誤" })}
              data-has-value={!!watch("email")}
            />
            <Label htmlFor="email">帳號（您的電子信箱）</Label>
          </InputWrapper>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <InputWrapper>
            <InputField
              type="password"
              {...register("password", {
                required:
                  "密碼長度必須至少 8 個字符，並且包含 1 個大寫英文字母、1 個小寫英文字母、1 個數字和 1 個標點符號",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                  message:
                    "密碼長度必須至少 8 個字符，並且包含 1 個大寫英文字母、1 個小寫英文字母、1 個數字和 1 個標點符號",
                },
                onChange: (e) => {
                  const value = e.target.value;
                  const isValid =
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(
                      value
                    );
                  e.target.setCustomValidity(
                    isValid ? "" : "密碼格式不符合要求"
                  );
                },
              })}
              data-has-value={!!watch("password")}
            />
            <Label htmlFor="password">密碼</Label>
          </InputWrapper>
          {isDirty && errors.password && (
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          )}
          <SubmitButton type="submit">
            {loading ? <LoaderSpinner /> : "資料送出"}
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
};

export default Regist;
