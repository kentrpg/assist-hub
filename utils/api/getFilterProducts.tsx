import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { get_products_filter } from "@/constants/apiPath";
import {
  RequestGetFilterProductsType,
  ResultGetFilterProducts,
  ResultGetFilterProductsType,
} from "@/types/getFilterProducts";

export const getFilterProducts = async (
  queryParams: RequestGetFilterProductsType,
): Promise<ResultGetFilterProductsType> => {
  const isMissingRequiredParams = !queryParams.type || !queryParams.lv;
  if (isMissingRequiredParams) {
    const errorMessage = !queryParams.type
      ? "缺少 type 參數"
      : "缺少 lv 參數";
    return {
      statusCode: 400,
      status: false,
      message: "缺少必要參數",
      data: undefined,
      error: {
        code: 400,
        message: errorMessage,
      },
    };
  }

  const searchParams = new URLSearchParams();
  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, value.toString());
    }
  });

  const parsedUrl = new URL(
    `${get_products_filter}?${searchParams.toString()}`,
  );

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
    const validation = validateResponseType(json, ResultGetFilterProducts);

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

export default getFilterProducts;
