import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { put_admin_suggest_product } from "@/constants/apiPath";
import {
  RequestPutAdminSuggestProduct,
  ResultPutAdminSuggestProduct,
  ResultPutAdminSuggestProductType,
} from "@/types/putAdminSuggestProduct";

export const putAdminSuggestProduct = async (
  token: string,
  data: RequestPutAdminSuggestProduct,
): Promise<ResultPutAdminSuggestProductType> => {
  const parsedUrl = new URL(put_admin_suggest_product);
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
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
    const validation = validateResponseType(json, ResultPutAdminSuggestProduct);

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

export default putAdminSuggestProduct;
