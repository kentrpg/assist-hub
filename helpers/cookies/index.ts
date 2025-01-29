import { serialize } from "cookie";
import { NODE_ENV } from "@/constants/environment";
import type { CookieOptions, AuthCookieConfig, BaseCookieOptions } from "./types";

const defaultAuthConfig: AuthCookieConfig = {
  token: {
    name: "token",
    maxAge: 60 * 60 * 24, // 24小時
  },
  identity: {
    name: "identity",
    maxAge: 60 * 60 * 24, // 24小時
  }
} as const;

const defaultCookieOptions: BaseCookieOptions = {
  httpOnly: true,
  secure: NODE_ENV === "production",
  path: "/",
  sameSite: "strict",
} as const;

export const setAuthCookie = (
  identity: "admin" | "user" | "",
  token: string
): string[] => {
  const cookieOptions: CookieOptions = {
    ...defaultCookieOptions,
    maxAge: defaultAuthConfig.token.maxAge,
  };

  return [
    serialize(defaultAuthConfig.token.name, token, cookieOptions),
    serialize(defaultAuthConfig.identity.name, identity, cookieOptions),
  ];
};

export const clearAuthCookie = (): string[] => {
  const cookieOptions: CookieOptions = {
    ...defaultCookieOptions,
    maxAge: 0, // 立即過期
  };

  return [
    serialize(defaultAuthConfig.token.name, "", cookieOptions),
    serialize(defaultAuthConfig.identity.name, "", cookieOptions),
  ];
};
