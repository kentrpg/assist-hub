import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { check } from "@/utils/api/auth/check";
import { isValid } from "@/helpers/api/status";
import { default_redirect, routes } from "@/constants/routes";

/** TBD: 後續邏輯
 *    - 驗證 Token 的有效性：Middleware 中使用 JWT 驗證來確認 token 是否有效 (jose)
 */

export const config = {
  matcher: [
    "/user/:path*",
    "/admin/:path*",
    "/cart",
    "/cart/((?!checkout/confirm).)*",
    "/inquiry",
    "/auth/:path*",
  ],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");
  const identity = request.cookies.get("identity");
  console.log(
    `middleware start ${pathname} token: ${token}, identity: ${identity}`,
  );

  if (pathname.startsWith("/admin")) {
    if (!token || !identity) {
      return NextResponse.redirect(new URL(routes.auth.signin, request.url));
    }

    if (identity.value !== "admin") {
      return NextResponse.redirect(new URL(routes.user.profile, request.url));
    }

    return NextResponse.next();
  }

  if (
    pathname.startsWith("/auth") &&
    !pathname.startsWith("/auth/confirm") &&
    token &&
    identity
  ) {
    const authResponse = await check(token.value);
    console.log("middleware auth", authResponse);

    if (isValid(authResponse)) {
      const redirectPath =
        identity.value === "admin"
          ? default_redirect.admin
          : default_redirect.user;
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
  }

  if (pathname.startsWith("/cart") || pathname.startsWith("/user")) {
    console.log(`middleware ${pathname} token: ${token}`);

    if (!token || !identity) {
      return NextResponse.redirect(new URL(routes.auth.signin, request.url));
    }

    const authResponse = await check(token.value);

    if (isValid(authResponse)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(routes.auth.signin, request.url));
    }
  }

  return NextResponse.next();
}
