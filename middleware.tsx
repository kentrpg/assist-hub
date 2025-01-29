import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { check } from "@/utils/api/auth/check";
import { isValid } from "@/helpers/api/status";

/** TBD: 後續邏輯
 *    - 驗證 Token 的有效性：Middleware 中使用 JWT 驗證來確認 token 是否有效 (jose)
 */

export const config = {
  matcher: ["/user/:path*", "/cart/:path*", "/admin/:path*"],
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log(`middleware ${pathname}`);

  const token = request.cookies.get("token");

  if (!token?.value) {
    return NextResponse.next();
  }

  const authResponse = await check(token.value);
  console.log(`authResponse ${authResponse}`);

  if (!isValid(authResponse)) {
    const response = NextResponse.redirect(
      new URL("/auth/signin", request.url),
    );
    response.cookies.delete("token");
    response.cookies.delete("identity");
    return response;
  }

  return NextResponse.next();
}
