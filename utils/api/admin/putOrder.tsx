import { Error } from "@/types/apiRoutes";
import { catchError } from "@/utils/handleErrors";
import { NODE_ENV } from "@/constants/environment";
import { validateResponseType } from "@/utils/typeGuards";
import { put_admin_order } from "@/constants/apiPath";
import { ResultPutAdminOrder, Result } from "@/types/putAdminOrder";
import { OrderData } from "@/components/pages/admin/OrderDetails/data";

export const putOrder = async (
  token: string,
  order: OrderData,
  orderId: string,
): Promise<Result> => {
  const parsedUrl = new URL(put_admin_order.replace(":id", orderId));
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
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
    const validation = validateResponseType(json, ResultPutAdminOrder);

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

export default putOrder;
