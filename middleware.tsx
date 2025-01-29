import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { check } from "@/utils/api/auth/check";
import { isValid } from "@/helpers/api/status";
import { routes } from "@/constants/routes";

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
  ],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");

  console.log(`middleware start ${pathname} token: ${token}`);

  // 如果沒有 token，讓 next.config.ts 的 redirects 處理 redirects
  if (!token) {
    return NextResponse.next();
  }

  // 驗證 token 有效性
  const authResponse = await check(token.value);

  if (!isValid(authResponse)) {
    console.log("token invalid");
    return NextResponse.redirect(new URL(routes.auth.signin, request.url));
  }

  return NextResponse.next();
}
