import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { get_auth_check } from "@/constants/apiPath";

/** TBD: 後續邏輯
 *    - 驗證 Token 的有效性：Middleware 中使用 JWT 驗證來確認 token 是否有效 (jose)
 */

console.log(
  "process.env.NEXT_PUBLIC_NODE_ENV:",
  process.env.NEXT_PUBLIC_NODE_ENV,
);

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("nextjs");
  console.log("middleware cookie 頭:", cookie);
  // const token = request.cookies.get("token");
  // console.log("middleware token:", token); // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll();
  console.log("middleware allCookies:", allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  const hasToken = allCookies.some((cookie) => cookie.name === "token");
  console.log("是否存在 token cookie:", hasToken);
  if (hasToken) {
    const tokenCookie = allCookies.find((cookie) => cookie.name === "token");
    console.log("tokenCookie:", tokenCookie);
    const isValidTokenValue =
      tokenCookie?.value && tokenCookie.value.length > 0;
    console.log("token 值是否有效:", isValidTokenValue);

    if (!isValidTokenValue) {
      console.log("token 存在但沒有有效值");
      // 這裡可以添加處理無效 token 的邏輯
    }
  }

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/cart")) {
    const tokenCookie = allCookies.find((cookie) => cookie.name === "token");
    console.log(
      "middleware pathname:",
      pathname,
      tokenCookie,
      request.cookies.has("token"),
    );
    const isValidTokenValue =
      tokenCookie?.value && tokenCookie.value.length > 0;
    if (!isValidTokenValue) {
      console.log("middleware 跳轉到登入頁");
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    const response = NextResponse.next();
    cookie = response.cookies.get("token");
    console.log("middleware cookie 尾:", cookie);
    return response;
  }

  // console.log(`middleware ${pathname} 驗證通過`);

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();
  response.cookies.set("vercel", "fast");
  response.cookies.set({
    name: "vercel",
    value: "fast",
    path: "/",
  });
  cookie = response.cookies.get("vercel");
  console.log("middleware cookie 外:", cookie);
  return response;
}

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   console.log("middleware 執行", pathname);
//   const token = request.cookies.get("token");

//   if (pathname.startsWith("/cart") || pathname.startsWith("/user")) {
//     console.log("middleware token:", token);
//     if (!token) {
//       return NextResponse.redirect(new URL("/auth/signin", request.url));
//     }

//     const authResponse = await fetch(get_auth_check, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token.value}`,
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });

//     console.log("Auth check response:", {
//       status: authResponse.status,
//       ok: authResponse.ok,
//     });

//     switch (authResponse.status) {
//       case 200:
//         return NextResponse.next();
//       case 401:
//         return NextResponse.redirect(new URL("/auth/signin", request.url));
//       default:
//         return NextResponse.redirect(new URL("/auth/signin", request.url));
//     }
//   }

//   return NextResponse.next();
// }
// if (pathname.startsWith("/inquiry")) {

// }

// export const config = {
//   matcher: ["/user/:path", "/cart/:path*"],
// };

export const config = {
  matcher: ["/user/:path", "/cart", "/cart/:path*"],
};
