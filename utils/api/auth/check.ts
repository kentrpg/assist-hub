import { get_auth_check } from "@/constants/apiPath";
import { Result } from "@/types/checkout";
import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";

export const check = async (token?: string): Promise<Result> => {

  const parsedUrl = new URL(get_auth_check);
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
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

  const json = await res.json();
  console.log("Auth check response:", json);

  return {
    statusCode: json.statusCode,
    status: json.status,
    message: json.message,
    data: json.data,
    error: null,
  };
};

export default check;
