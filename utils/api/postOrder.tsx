import { Result, Response, RequestCheckoutType } from "@/types/postOrder";
import { catchError } from "../handleErrors";
import { Error } from "@/types/apiRoutes";
import { post_orders } from "@/constants/apiPath";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "../typeGuards";

export const postOrder = async (
  token: string,
  data: RequestCheckoutType,
): Promise<Result> => {
  const parsedUrl = new URL(post_orders);
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const [res, error] = await catchError(fetch(parsedUrl, options));

  console.log("res", res, error);

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

  if (NODE_ENV === "development") {
    const validation = validateResponseType(json, Response);

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

export default postOrder;
