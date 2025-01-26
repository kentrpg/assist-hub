import { get_linepay_callback } from "@/constants/apiPath";
import {
  ResponseGetLineCallback,
  ResultGetLineCallback,
} from "@/types/getLinecallback";
import { catchError } from "../handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { Error } from "@/types/apiRoutes";

export const getLineCallback = async (
  queryString: string,
): Promise<ResultGetLineCallback> => {
  console.log("queryString", queryString);
  const normalizedQueryString = queryString.startsWith("?")
    ? queryString
    : `?${queryString}`;

  console.log("normalizedQueryString", normalizedQueryString);

  const baseUrl = get_linepay_callback;
  const fullUrl = `${baseUrl}${normalizedQueryString}`;

  console.log("fullUrl", fullUrl);

  const parsedUrl = new URL(fullUrl);
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
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

  console.log("json", json);

  if (NODE_ENV === "development") {
    const validation = validateResponseType(json, ResponseGetLineCallback);

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

export default getLineCallback;
