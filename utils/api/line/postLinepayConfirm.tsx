import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { post_linepay_confirm } from "@/constants/apiPath";
import {
  ResultPostLinepayConfirm,
  RequestPostLinepayConfirmType,
  ResultPostLinepayConfirmType,
} from "@/types/postLinepayConfirm";

export const postLinepayConfirm = async (
  data: RequestPostLinepayConfirmType,
): Promise<ResultPostLinepayConfirmType> => {
  console.log("data", data);
  const parsedUrl = new URL(post_linepay_confirm);
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
    const validation = validateResponseType(json, ResultPostLinepayConfirm);

    !validation.isValid &&
      console.error("API Response validation failed:", validation.errors);
  }

  return {
    statusCode: json.statusCode,
    status: json.status,
    message: json.message,
    data: undefined,
    error: null,
  };
};

export default postLinepayConfirm;
