import { useState, Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

import { Container, Title, Form, Button } from "../Layout/styled";

import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import FormField from "@/utils/react-hook-form/FloatingLabel";
import { RegisterField } from "@/utils/react-hook-form/types";
import { registerFields, RegistInputs } from "./data";

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
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    const isSuccess = result.statusCode === 200 && result.status;
    if (Object.is(result.error, null)) {
      isSuccess && router.push("/auth/signin");
    } else {
      setError("email", { message: result.message || "請求錯誤" });
      console.error("Error:", result.error);
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
        <Button
          type="submit"
          disabled={isSubmitting || Object.keys(errors).length !== 0}
        >
          {isSubmitting ? <LoaderSpinner /> : "註冊帳號"}
        </Button>
      </Form>
    </Container>
  );
};

export default Regist;
