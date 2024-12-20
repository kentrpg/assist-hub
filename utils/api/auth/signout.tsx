import { AuthFnResponse } from "@/types/apiRoutes";

export const signOut: AuthFnResponse = async () => {
  try {
    const response = await fetch("/api/auth/signout", {
      method: "DELETE",
    });

    const data = await response.json();

    switch (data.status) {
      case 200:
        console.log("登出成功");
        break;
      case 401:
        console.error("未授權的請求", data.message[0]);
        break;
      default:
        console.error("發生未知錯誤", data.message[0]);
        break;
    }

    return data;
  } catch (error) {
    console.error("網路錯誤:", error);
    throw error;
  }
};
