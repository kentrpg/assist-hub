import { get_auth_check } from "@/constants/apiPath";
import { Result } from "@/types/postOrder";
import type { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";

export const check = async (token: string): Promise<Result> => {
  const parsedUrl = new URL(get_auth_check);
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  };

  const [res, error] = await catchError(fetch(parsedUrl, options));

  if (error) {
    console.log("Auth check error:", error);

    const unexpectedError: Error = {
      code: 500,
      message: `發生未知錯誤: ${error.message}`,
    };

    return {
      statusCode: 500,
      status: false,
      message: unexpectedError.message,
      data: undefined,
      error: unexpectedError,
    };
  }

  try {
    const json = await res.json();

    return {
      statusCode: json.statusCode,
      status: json.status,
      message: json.message,
      data: json.data,
      error: null,
    };
  } catch (parseError) {
    const errorText = await res.text();
    console.error("JSON parse error:", errorText, parseError);
    const unexpectedError: Error = {
      code: res.status,
      message: "伺服器忙線中",
    };

    return {
      statusCode: res.status,
      status: false,
      message: unexpectedError.message,
      data: undefined,
      error: unexpectedError,
    };
  }
};

export default check;
