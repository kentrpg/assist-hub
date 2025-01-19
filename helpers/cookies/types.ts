import type { SerializeOptions } from "cookie";

export type BaseCookieOptions = Required<Pick<SerializeOptions, "httpOnly" | "secure" | "path" | "sameSite">>;

export type AuthCookieConfig = {
  name: string;
  maxAge: number;
};

export type CookieOptions = BaseCookieOptions & Pick<AuthCookieConfig, "maxAge">;
