import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { check } from "@/utils/api/auth/check";
import { isValid } from "@/helpers/api/status";

/** TBD: 後續邏輯
 *    - 驗證 Token 的有效性：Middleware 中使用 JWT 驗證來確認 token 是否有效 (jose)
 */

export const config = {
  matcher: ["/user/:path", "/cart", "/cart/:path*", "/inquiry"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");
  console.log(`middleware start ${pathname} token: ${token}`);

  if (pathname.startsWith("/cart") || pathname.startsWith("/user")) {
    console.log(`middleware ${pathname} token: ${token}`);

    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    const authResponse = await check(token.value);

    if (isValid(authResponse)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }

  return NextResponse.next();
}
