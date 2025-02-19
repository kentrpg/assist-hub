import { get_linepay_callback } from "@/constants/apiPath";
import {
  ResponseGetLineCallback,
  RequestGetLineCallbackQueryType,
  RequestGetLineCallbackType,
  ResponseGetLineCallbackDefault,
} from "@/types/getLinecallback";
import { catchError } from "../handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { Error } from "@/types/apiRoutes";

export const getLineCallback = async (
  query: RequestGetLineCallbackQueryType,
): Promise<ResponseGetLineCallback> => {
  const { code, state, error: lineLoginError, error_description } = query;

  if (lineLoginError) {
    return {
      statusCode: 400,
      status: false,
      message: error_description || "LINE 登入失敗",
      data: undefined,
      error: {
        code: 400,
        message: lineLoginError,
      },
    };
  }

  const isMissingRequiredParams = !code || !state;
  if (isMissingRequiredParams) {
    return {
      statusCode: 400,
      status: false,
      message: "缺少必要參數",
      data: undefined,
      error: {
        code: 400,
        message: !code ? "缺少 code 參數" : "缺少 state 參數",
      },
    };
  }

  const requestData: RequestGetLineCallbackType = {
    code,
    state,
  };

  const params = new URLSearchParams(requestData);
  const queryString = `?${params.toString()}`;

  const baseUrl = get_linepay_callback;
  const fullUrl = `${baseUrl}${queryString}`;

  const parsedUrl = new URL(fullUrl);
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const [res, error] = await catchError(fetch(parsedUrl, options));

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
    const validation = validateResponseType(
      json,
      ResponseGetLineCallbackDefault,
    );

    !validation.isValid &&
      console.error("API Response validation failed:", validation.errors);
  }

  return {
    statusCode: json.statusCode,
    status: json.status,
    message: json.message,
    data: json.data,
    error: json.error || null,
  };
};

export default getLineCallback;
