import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { get_product } from "@/constants/apiPath";
import { ResultGetProduct, ResultGetProductType } from "@/types/getProduct";

export const getProduct = async (
  productId: number
): Promise<ResultGetProductType> => {
  const parsedUrl = new URL(get_product.replace(":id", productId.toString()));
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

  // if (NODE_ENV === "development") {
  //   const validation = validateResponseType(json, ResultGetProduct);

  //   !validation.isValid &&
  //     console.error("API Response validation failed:", validation.errors);
  // }

  return {
    statusCode: json.statusCode,
    status: json.status,
    message: json.message,
    data: json.data,
    error: null,
  };
};

export default getProduct;
