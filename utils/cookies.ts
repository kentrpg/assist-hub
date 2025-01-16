import { serialize } from "cookie";
import { NODE_ENV } from "@/constants/environment";

export const setAuthCookie = (token: string) => {
  return serialize("token", token, {
    httpOnly: true,
    secure: NODE_ENV === "production",
    path: "/",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
  });
}; 