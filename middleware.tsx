import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { check } from "@/utils/api/auth/check";
import { hasError, isValid } from "@/helpers/api/status";

/** TBD: 後續邏輯
 *    - 驗證 Token 的有效性：Middleware 中使用 JWT 驗證來確認 token 是否有效 (jose)
 */

export const config = {
  matcher: [
    "/user/:path*",
    "/admin/:path*",
    "/cart/:path((?!checkout/confirm$).*)?",
  ],
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log(`middleware ${pathname}`);

  const token = request.cookies.get("token");

  if (!token?.value) {
    return NextResponse.next();
  }

  try {
    const authResponse = await check(token.value);
    console.log(
      `authResponse ${authResponse.message}, ${authResponse.error}, ${authResponse.data}`,
    );

    if (hasError(authResponse)) {
      console.error(`Auth check failed: ${authResponse.message || "未知錯誤"}`);
      return NextResponse.redirect(new URL("/500", request.url));
    }

    if (!isValid(authResponse)) {
      const response = NextResponse.redirect(
        new URL("/auth/signin", request.url),
      );
      response.cookies.delete("token");
      response.cookies.delete("identity");
      return response;
    }

    return NextResponse.next();
  } catch (error) {
    // 記錄原始錯誤
    console.error(
      "Middleware error:",
      error instanceof Error ? error.message : "未知錯誤",
    );

    // JSON 解析錯誤，通常表示 API 服務異常
    if (error instanceof SyntaxError && error.message.includes("JSON")) {
      console.error("API 服務異常：", {
        path: pathname,
        errorType: "JSON_PARSE_ERROR",
        timestamp: new Date().toISOString(),
        details: error.message,
      });
    } else if (error instanceof Error) {
      // 其他已知錯誤類型
      console.error("其他錯誤：", {
        path: pathname,
        errorType: error.name,
        timestamp: new Date().toISOString(),
        details: error.message,
      });
    }

    return NextResponse.redirect(new URL("/500", request.url));
  }
}
