import { useState, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useRouter } from "next/router";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import FormField from "@/utils/react-hook-form/FloatingLabel";
import { RegisterField } from "@/utils/react-hook-form/types";
import { registerFields, SignInInputs } from "./data";
import { UnderlineLink } from "@/utils/link";
import { signIn } from "@/utils/api/auth/signin";
import { IconWrapper } from "@/utils/react-icons/iconWrappers";
import { FaLine } from "react-icons/fa";
import { useTheme } from "styled-components";
import CheckboxField from "@/utils/react-hook-form/CheckboxField";
import {
  Container,
  Title,
  Form,
  FooterLinks,
  Button,
  OutlineButton,
} from "../Layout/styled";
import { ForgotPasswordLink, Remember } from "./styled";

const Signin: React.FC = () => {
  const {
    register,
    control,
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
  const theme = useTheme();

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
        <Remember>
          <CheckboxField
            id="remember"
            control={control}
            field={{ name: "remember" }}
            $gap={8}
            $fontSize={16}
            $checkedColor="textMuted"
            $uncheckedColor="textMuted"
            $labelColor="textMuted"
          >
            記住我
          </CheckboxField>
          <ForgotPasswordLink>忘記密碼</ForgotPasswordLink>
        </Remember>
        <Button
          type="submit"
          disabled={isSubmitting || Object.keys(errors).length !== 0}
        >
          {isSubmitting ? <LoaderSpinner /> : "登入"}
        </Button>
        <OutlineButton type="button">
          <IconWrapper $size={31} $backgroundColor="white" $borderRadius={5}>
            <FaLine size={31} fill={theme.colors.lineLogo} />
          </IconWrapper>
          Line 登入
        </OutlineButton>
        <FooterLinks>
          還沒有帳號嗎？
          <UnderlineLink href="/auth/register">立即註冊</UnderlineLink>
        </FooterLinks>
      </Form>
    </Container>
  );
};

export default Signin;
