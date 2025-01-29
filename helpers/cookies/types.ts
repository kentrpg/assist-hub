export type BaseCookieOptions = {
  httpOnly: boolean;
  secure: boolean;
  path: string;
  sameSite: "strict" | "lax" | "none";
};

export type CookieOptions = BaseCookieOptions & {
  maxAge: number;
};

type CookieConfig = {
  name: string;
  maxAge: number;
};

export type AuthCookieConfig = {
  token: CookieConfig;
  identity: CookieConfig;
};
