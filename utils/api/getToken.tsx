import { Result } from "@/types/postOrder";

export const getToken = async (token: string): Promise<Result> => {
  const isTokenValid = !!token && token !== "";

  if (!isTokenValid) {
    return {
      statusCode: 401,
      status: false,
      message: "尚未登入",
      data: undefined,
      error: null,
    };
  }

  return {
    statusCode: 200,
    status: true,
    message: "已登入",
    data: undefined,
    error: null,
  };
};

export default getToken;
