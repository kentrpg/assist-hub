import { AuthResponse, RegisterRequest } from "@/types/apiRoutes";

export async function signUp(data: RegisterRequest): Promise<AuthResponse> {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    switch (result.status) {
      case 201:
        console.log("註冊成功");
        break;
      case 422:
        console.error("未授權的請求", result.message);
        break;
      default:
        console.error("發生未知錯誤", result.message);
        break;
    }
    return result;
  } catch (error) {
    console.error("網路錯誤:", error);
    throw error;
  }
};