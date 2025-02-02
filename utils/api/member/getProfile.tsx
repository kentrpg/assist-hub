import { Result } from "@/types/postOrder";
import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { get_member_profile } from "@/constants/apiPath";
import {
  ResultGetMemberProfile,
  ResultGetMemberProfileType,
} from "@/types/getMemberProfile";

export const getProfile = async (
  token: string,
): Promise<Result<ResultGetMemberProfileType["data"]>> => {
  const parsedUrl = new URL(get_member_profile);
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const [res, error] = await catchError(fetch(parsedUrl, options));

  console.log("getProfile res", res);

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

  console.log("getProfile json", json);

  if (NODE_ENV === "development") {
    const validation = validateResponseType(json, ResultGetMemberProfile);

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

export default getProfile;
