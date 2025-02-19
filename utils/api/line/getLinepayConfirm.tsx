import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { post_linepay_confirm } from "@/constants/apiPath";
import {
  ResultGetLinepayConfirm,
  RequestGetLinepayConfirmQueryType,
  RequestGetLinepayConfirmType,
  ResultGetLinepayConfirmType,
} from "@/types/getLinepayConfirm";

export const getLinepayConfirm = async (
  query: RequestGetLinepayConfirmQueryType,
): Promise<ResultGetLinepayConfirmType> => {
  const transactionId = query.transactionId;
  const orderId = query.orderId ? Number(query.orderId) : undefined;

  const isMissingRequiredParams = !transactionId || !orderId;
  if (isMissingRequiredParams) {
    return {
      statusCode: 400,
      status: false,
      message: "缺少必要參數",
      data: undefined,
      error: {
        code: 400,
        message: !transactionId
          ? "缺少 transactionId 參數"
          : "缺少 orderId 參數",
      },
    };
  }

  const requestData: RequestGetLinepayConfirmType = {
    transactionId,
    orderId,
  };

  const parsedUrl = new URL(post_linepay_confirm);
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
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
