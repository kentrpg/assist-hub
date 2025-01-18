import { Result } from "@/types/postOrder";
import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { put_member_profile } from "@/constants/apiPath";
import {
  ResultPutMemberProfile,
  ResultPutMemberProfileType,
} from "@/types/putMemberProfile";

export const putProfile = async (
  token: string,
  data: ResultPutMemberProfileType["data"]
): Promise<Result> => {
  const parsedUrl = new URL(put_member_profile);
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
    const validation = validateResponseType(json, ResultPutMemberProfile);

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

export default putProfile;
