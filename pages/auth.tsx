import React from "react";
import RegisterForm from "@/components/pages/auth/Register";
import SigninForm from "@/components/pages/auth/Signin";

export default function auth() {
  return (
    <div>
      <RegisterForm />
      <SigninForm />
    </div>
  );
}
