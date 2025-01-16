import { post_auth_sign_in } from "@/constants/apiPath";
import { Result } from "@/types/checkout";
import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { AuthResponse } from "@/types/apiRoutes";
import { serialize } from "cookie";
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

  // const token = res.headers.get("authorization");

  const json = await res.json();

  if (NODE_ENV === "development") {
    const validation = validateResponseType(json, ResultSignin);

    !validation.isValid &&
      console.error("API Response validation failed:", validation.errors);
  }

  console.log("json", json);
  // const token = json.data.jwtToken;
  // console.log("json", json, token, res.headers.get("authorization"));

  // const token =
  //   "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjgsIkV4cCI6IjEvMTcvMjAyNSAxOjI0OjI1IFBNIn0.mnvwc02joKDCYPuq4rtUHemnGb1I_Zi5eQcUrwZ00ppH1dfyDCTf_pqojKL-y-M90gjebM81G51YtFtn9RJmag";
  // const cookie = serialize("session", token || "", {
  //   httpOnly: true,
  //   secure: NODE_ENV === "production",
  //   path: "/",
  //   sameSite: "strict",
  // });

  // res.ok && json.statusCode === 200 && json.setHeader("Set-Cookie", cookie);

  return {
    statusCode: json.statusCode,
    status: json.status,
    message: json.message,
    data: json.data,
    error: null,
  };
};

export default signIn;
