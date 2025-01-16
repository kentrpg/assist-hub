import { FormValuesProps } from "../react-hook-form/InputField/data";
import { Result } from "@/types/checkout";
import { catchError } from "../handleErrors";
import { Error } from "@/types/apiRoutes";
import { post_order } from "@/constants/apiPath";

export const checkout = async (
  data: FormValuesProps["checkout"],
): Promise<Result> => {
  const parsedUrl = new URL(post_order);
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

  return {
    statusCode: json.statusCode,
    status: json.status,
    message: json.message,
    data: undefined,
    error: null,
  };
};

export default checkout;
