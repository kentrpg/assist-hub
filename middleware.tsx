import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import cookie from "cookie";

/** TBD: 後續邏輯
 *    - 驗證 Token 的有效性：Middleware 中使用 JWT 驗證來確認 token 是否有效 (jose)
 */

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);

  if (pathname.startsWith("/inquiry")) {
    const token = request.cookies.get("token");
    console.log(token);
    if (!token) {
      return NextResponse.redirect(new URL("/inquiry404", request.url));
    }

    try {
      console.log(token.value);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_5XCAMP}/check`,
        {
          method: "GET",
          headers: {
            Authorization: token.value,
          },
        }
      );

      if (response.status !== 200) {
        return NextResponse.redirect(new URL("/inquiry404", request.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL("/inquiry404", request.url));
    }
  }

  if (pathname.startsWith("/user")) {
    const token = request.cookies.get("token");
    console.log(token);
    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    try {
      console.log(token.value);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_5XCAMP}/check`,
        {
          method: "GET",
          headers: {
            Authorization: token.value,
          },
        }
      );

      if (response.status !== 200) {
        return NextResponse.redirect(new URL("/auth/signin", request.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  // matcher: ["/user", "/inquiry"],
  matcher: ["/user"],
};
