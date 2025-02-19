import { delete_auth_sign_out } from "@/constants/apiPath";
import { ResultSignoutType } from "@/types/signout";
import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";

export const signOut = async (token: string): Promise<ResultSignoutType> => {
  const parsedUrl = new URL(delete_auth_sign_out);
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
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

  return {
    statusCode: json.statusCode,
    status: json.status,
    message: json.message,
    data: json.data,
    error: null,
  };
};
