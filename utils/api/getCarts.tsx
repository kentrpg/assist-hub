import fs from "fs/promises";
import path from "path";
import {
  CartResponse,
  rentalPeriodOptions,
} from "@/components/pages/cart/ProductCard/data";

// 用於驗證 response 資料的型別檢查函數
export const isCartResponse = (response: unknown): response is CartResponse => {
  if (typeof response !== "object" || response === null) {
    return false;
  }

  const { status, message, data } = response as CartResponse;

  return (
    typeof status === "number" &&
    typeof message === "string" &&
    Array.isArray(data) &&
    data.every((item) => {
      return (
        typeof item.cartId === "number" &&
        typeof item.name === "string" &&
        typeof item.description === "string" &&
        typeof item.quantity === "number" &&
        typeof item.rent === "number" &&
        typeof item.deposit === "number" &&
        typeof item.amount === "number" &&
        rentalPeriodOptions.includes(item.period) &&
        typeof item.rentStamp === "string" &&
        typeof item.returnStamp === "string" &&
        typeof item.imgSrc === "string" &&
        typeof item.imgAlt === "string"
      );
    })
  );
};

export const getOrder = async (): Promise<CartResponse> => {
  try {
    const filePath = path.join(process.cwd(), "mock/GET_carts.json");
    const jsonData = await fs.readFile(filePath, "utf8");
    const response = JSON.parse(jsonData);

    if (!isCartResponse(response)) {
      throw new Error("無效的購物車資料結構");
    }

    return response;
  } catch (error) {
    console.error("取得訂單資料失敗:", error);
    throw error;
  }
};

export default getOrder;
