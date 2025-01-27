import { serialize } from "cookie";
import { NODE_ENV } from "@/constants/environment";
import type { CookieOptions, AuthCookieConfig, BaseCookieOptions } from "./types";
import { isValid } from "../api/status";

const defaultAuthConfig: AuthCookieConfig = {
  name: "token",
  maxAge: 60 * 60 * 24, // 24小時
} as const;

const defaultCookieOptions: BaseCookieOptions = {
  httpOnly: true,
  secure: NODE_ENV === "production",
  path: "/",
  sameSite: "strict",
} as const;

export const setAuthCookie = (
  token: string,
  config: Partial<AuthCookieConfig> = {}
): string => {
  const { name = defaultAuthConfig.name, maxAge = defaultAuthConfig.maxAge } = config;
  
  const cookieOptions: CookieOptions = {
    ...defaultCookieOptions,
    maxAge,
  };

  return serialize(name, token, cookieOptions);
};

export const checkAuthStatus = async (): Promise<boolean> => {
  const result = await fetch("/api/auth/check", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await result.json();
  const isTokenValid = isValid(json);
  return isTokenValid;
}; 
