import { AuthResponse, SignInRequest } from "@/types/apiRoutes";

export async function signIn(data: SignInRequest): Promise<AuthResponse> {
  try {
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    switch (result.status) {
      case 200:
        console.log("登入成功");
        break;
      case 401:
        console.error("帳號或密碼錯誤", result.message);
        break;
      default:
        console.error("發生未知錯誤", result.message);
        break;
    }

    return result;
  } catch (error: unknown) {
    console.error("網路錯誤:", error);
    throw error;
    // return {
    //   status: 408,
    //   data: { message: "請求超時，請稍後再試" },
    // };
  }
}
