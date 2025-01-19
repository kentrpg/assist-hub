import { BASE_PATH, BASE_URL, BASE_URL_VM, MOCK_MODE } from "./environment";

export const baseUrl =
  MOCK_MODE === "true" ? BASE_URL : BASE_URL_VM;

export const basePath = MOCK_MODE === "true" && BASE_PATH || "/api/v1";

export const post_auth_sign_up = `${baseUrl}${basePath}/auth/sign_up`;
export const post_auth_sign_in = `${baseUrl}${basePath}/auth/sign_in`;
export const get_auth_check = `${baseUrl}${basePath}/auth`;

export const get_carts = `${baseUrl}${basePath}/carts`;
export const post_carts = `${baseUrl}${basePath}/carts`;
export const post_orders = `${baseUrl}${basePath}/orders`;
export const put_carts = `${baseUrl}${basePath}/carts`;

export const get_member_profile = `${baseUrl}${basePath}/member/profile`;
export const put_member_profile = `${baseUrl}${basePath}/member/profile`;
export const get_member_orders = `${baseUrl}${basePath}/members/orders`;
export const get_member_order = `${baseUrl}${basePath}/members/order/:id`;

export const get_products = `${baseUrl}${basePath}/products`;
export const get_product = `${baseUrl}${basePath}/products/:id`;
