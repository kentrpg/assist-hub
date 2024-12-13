import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaLine } from "react-icons/fa";

import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Title,
  Form,
  Label,
  InputField,
  InputWrapper,
  ErrorMessage,
  RememberWrapper,
  TextMuted,
  FooterLinks,
} from "../Layout/styled";
import LinkStyle from "@/components/ui/LinkStyle";
import { LineButton, SubmitButton } from "@/components/ui/Button";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";

type SignInResponse = {
  status: boolean;
  token: string;
  message?: string;
};

type Inputs = {
  email: string;
  password: string;
};

const Signin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/sign_in`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );
      console.log(response);
      const result: SignInResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "登入失敗");
      }
      /** QUESTION
       * Index
       * ❓ QUESTION: document.cookie 的「path=/」需要針對特定頁面設置嗎？
       */
      if (result.token) {
        console.log(result.token);
        sessionStorage.setItem("token", result.token);
        document.cookie = `token=${result.token}; path=/`;

        // const originalFetch = window.fetch; // 保留原始的 fetch 函數
        // const bearerToken = `Bearer ${result.token}`;

        // window.fetch = (input: RequestInfo | URL, options: RequestInit = {}) => {
        //   options.headers = {
        //     ...options.headers,
        //     Authorization: bearerToken,
        //   };
        //   return originalFetch(input, options); // 使用原始的 fetch
        // };

        router.push("/user");
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
        <Title>登入</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <InputField
              type="email"
              {...register("email", { required: "帳號是必填欄位" })}
              data-has-value={!!watch("email")}
            />
            <Label htmlFor="email">帳號（您的電子信箱）</Label>
          </InputWrapper>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <InputWrapper>
            <InputField
              type="password"
              {...register("password", { required: "密碼是必填欄位" })}
              data-has-value={!!watch("password")}
            />
            <Label htmlFor="password">密碼</Label>
          </InputWrapper>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
          <RememberWrapper>
            <TextMuted>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">記住我</label>
            </TextMuted>
            <LinkStyle as={Link} href="#">
              忘記密碼
            </LinkStyle>
          </RememberWrapper>
          <SubmitButton type="submit">
            {loading ? <LoaderSpinner /> : "登入"}
          </SubmitButton>
          <LineButton as={Link} href="#">
            <FaLine size={24} />
            Line 登入
          </LineButton>
          <FooterLinks>
            還沒有帳號嗎？
            <LinkStyle as={Link} href="/auth/register">
              立即註冊
            </LinkStyle>
          </FooterLinks>
        </Form>
      </Container>
    </>
  );
};

export default Signin;
