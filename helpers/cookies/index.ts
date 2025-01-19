import { serialize } from "cookie";
import { NODE_ENV } from "@/constants/environment";
import type { CookieOptions, AuthCookieConfig, BaseCookieOptions } from './types';

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