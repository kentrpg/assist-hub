import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { post_linepay_confirm } from "@/constants/apiPath";
import {
  ResultGetLinepayConfirm,
  RequestGetLinepayConfirmType,
  ResultGetLinepayConfirmType,
} from "@/types/getLinepayConfirm";

export const getLinepayConfirm = async (
  data: RequestGetLinepayConfirmType,
): Promise<ResultGetLinepayConfirmType> => {
  const { transactionId, orderId } = data;
  const isMissingRequiredParams = !transactionId || !orderId;

  console.log("transactionId", transactionId);
  console.log("orderId", orderId);

  if (isMissingRequiredParams) {
    return {
      statusCode: 405,
      status: false,
      message: "缺少必要參數",
      data: undefined,
      error: {
        code: 405,
        message: "缺少 transactionId 或 finalAmount",
      },
    };
  }

  console.log("getLinepayConfirm data", data);
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

  console.log("res", res, "error", error);

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
    const validation = validateResponseType(json, ResultGetLinepayConfirm);

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

export default getLinepayConfirm;
