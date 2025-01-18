import { post_auth_sign_up } from "@/constants/apiPath";
import { Result } from "@/types/postOrder";
import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";

type Register = {
  name: string;
  email: string;
  password: string;
};

export const signUp = async (data: Register): Promise<Result> => {
  const parsedUrl = new URL(post_auth_sign_up);
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const [res, error] = await catchError(fetch(parsedUrl, options));

  console.log("res", res);

  if (error) {
    console.log("error", error);

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
  console.log("json", json);

  return {
    statusCode: json.statusCode,
    status: json.status,
    message: json.message,
    data: undefined,
    error: null,
  };
};

export default signUp;
