import { useState, useEffect, useRef, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaLine } from "react-icons/fa";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Title, Form, FooterLinks } from "../Layout/styled";
import { LineButton, SubmitButton } from "@/components/ui/Button";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import FormField from "@/utils/react-hook-form/FormField";
import { RegisterField } from "@/utils/react-hook-form/types";
import { registerFields, SignInResponse, SignInInputs } from "./data";
import LinkStyle from "@/components/ui/LinkStyle";

const Signin: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields },
  } = useForm<SignInInputs>({
    mode: "onChange",
    defaultValues: {
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const signIn = `${process.env.NEXT_PUBLIC_BASE_URL}/users/sign_in`;

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(signIn, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result: SignInResponse = await response.json();

      switch (response.status) {
        case 200:
          router.push("/auth/signin");
          break;
        case 401:
          setError("password", {
            message: result.message,
          });
          break;
        case 404:
          setError("email", {
            message: "用戶不存在",
          });
          break;
        default:
          console.error(result);
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
      <Title>登入</Title>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        {registerFields.map((field: RegisterField<SignInInputs>) => (
          <Fragment key={field.name}>
            <FormField
              field={field}
              register={register}
              errors={errors}
              dirtyFields={dirtyFields}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </Fragment>
        ))}
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
  );
};

export default Signin;
