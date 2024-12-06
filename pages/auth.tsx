import React from "react";
import RegisterForm from "@/components/pages/auth/RegisterForm";
import SigninForm from "@/components/pages/auth/SigninForm";

export default function auth() {
  return (
    <div>
      <RegisterForm />
      <SigninForm />
    </div>
  );
}
