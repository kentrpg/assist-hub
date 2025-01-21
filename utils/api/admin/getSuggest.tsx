import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { get_admin_suggest } from "@/constants/apiPath";
import {
  ResultGetAdminSuggest,
  ResultGetAdminSuggestType,
} from "@/types/getAdminSuggest";

export const getSuggest = async (
  token: string,
  suggestId: string
): Promise<ResultGetAdminSuggestType> => {
  console.log("getSuggest suggestId", token, suggestId);
  const parsedUrl = new URL(get_admin_suggest);
  parsedUrl.searchParams.append("suggestId", suggestId);

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const [res, error] = await catchError(fetch(parsedUrl, options));

  console.log("suggest res", res);

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

  console.log("suggest json", json);

  if (NODE_ENV === "development") {
    const validation = validateResponseType(json, ResultGetAdminSuggest);

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

export default getSuggest;
