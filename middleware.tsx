import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { get_auth_check } from "@/constants/apiPath";

/** TBD: 後續邏輯
 *    - 驗證 Token 的有效性：Middleware 中使用 JWT 驗證來確認 token 是否有效 (jose)
 */

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");

  if (pathname.startsWith("/cart") || pathname.startsWith("/user")) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    // TBD: 問學長 middleware 直接使用外部 API 是否可行，還是要打 API function？
    // TBD: const authResponse = await fetch(`${request.nextUrl.origin}/api/auth/check`) + Cookie: `token=${token.value}
    const authResponse = await fetch(get_auth_check, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log("Auth check response:", {
      status: authResponse.status,
      ok: authResponse.ok,
    });

    switch (authResponse.status) {
      case 200:
        return NextResponse.next();
      case 401:
        return NextResponse.redirect(new URL("/auth/signin", request.url));
      default:
        return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }

  // if (pathname.startsWith("/inquiry")) {

  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/cart/:path*"],
};
