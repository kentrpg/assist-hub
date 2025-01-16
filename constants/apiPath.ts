import { BASE_PATH, BASE_URL, BASE_URL_VM, MOCK_MODE } from "./environment";

export const baseUrl =
  MOCK_MODE === "true" ? BASE_URL : BASE_URL_VM;

export const basePath = MOCK_MODE === "true" && BASE_PATH || "/api/v1";

export const post_order = `${baseUrl}${basePath}/order`;
export const post_auth_sign_up = `${baseUrl}${basePath}/auth/sign_up`;
export const post_auth_sign_in = `${baseUrl}${basePath}/auth/sign_in`;
export const get_auth_check = `${baseUrl}${basePath}/auth`;
export const get_carts = `${baseUrl}${basePath}/carts`;
export const post_carts = `${baseUrl}${basePath}/carts`;