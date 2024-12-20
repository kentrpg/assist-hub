import { useState, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useRouter } from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Title, Form, FooterLinks } from "../Layout/styled";
import { LineButton, AuthButton } from "@/components/ui/buttons";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import FormField from "@/utils/react-hook-form/FormField";
import { RegisterField } from "@/utils/react-hook-form/types";
import { registerFields, SignInInputs } from "./data";
import LinkStyle from "@/components/ui/BaseLink";
import { signIn } from "@/utils/api/auth/signin";
import { StyledFaLine } from "@/utils/react-icons/IconColor";

const Signin: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<SignInInputs>({
    mode: "onChange",
    defaultValues: {
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    console.log(data);
    try {
      const response = await signIn({
        email: data.email,
        password: data.password,
      });
      console.log(response);
      switch (response.status) {
        case 200:
          router.push("/user");
          break;
        case 401:
          setError("password", {
            message: response.message,
          });
          break;
        default:
          setError("email", { message: "系統錯誤，請稍後再試" });
      }
    } catch (error) {
      console.error("登入錯誤:", error);
    }
  };

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
        <AuthButton
          type="submit"
          disabled={isSubmitting || Object.keys(errors).length !== 0}
        >
          {isSubmitting ? <LoaderSpinner /> : "登入"}
        </AuthButton>
        <LineButton as={Link} href="#">
          <StyledFaLine size={24} />
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
