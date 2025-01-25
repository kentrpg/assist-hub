import { post_auth_sign_in } from "@/constants/apiPath";
import { Result } from "@/types/postOrder";
import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { ResultSigninType, ResultSignin } from "@/types/signin";

type SignIn = {
  email: string;
  password: string;
};

export const signIn = async (
  data: SignIn,
): Promise<Result<ResultSigninType["data"]>> => {
  console.log("signin utils", data);
  const parsedUrl = new URL(post_auth_sign_in);
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const [res, error] = await catchError(fetch(parsedUrl, options));

  console.log("signin res", res, error);

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

  console.log("signin json", json);

  if (NODE_ENV === "development") {
    const validation = validateResponseType(json, ResultSignin);

    !validation.isValid &&
      console.error("API Response validation failed:", validation.errors);
  }

  return {
    statusCode: json.statusCode,
    status: json.status,
    message: json.message,
    data: json.data,
    error: null,
  };
};

export default signIn;
