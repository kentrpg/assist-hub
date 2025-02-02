import { BASE_PATH, BASE_URL, BASE_URL_VM, MOCK_MODE } from "./environment";

export const baseUrl =
  MOCK_MODE === "true" ? BASE_URL : BASE_URL_VM;

export const basePath = MOCK_MODE === "true" && BASE_PATH || "/api/v1";

export const post_auth_sign_up = `${baseUrl}${basePath}/auth/sign_up`;
export const post_auth_sign_in = `${baseUrl}${basePath}/auth/sign_in`;
export const get_auth_check = `${baseUrl}${basePath}/auth`;
export const delete_auth_sign_out = `${baseUrl}${basePath}/auth/sign_out`;

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
export const get_products_filter = `${baseUrl}${basePath}/products/filter`;

export const post_inquiry = `${baseUrl}${basePath}/inquiry`;
export const get_inquiries = `${baseUrl}${basePath}/member/inquiries`;
export const post_member_inquiry = `${baseUrl}${basePath}/member/inquiry`;
export const get_inquiry = `${baseUrl}${basePath}/inquiry/:id`;
export const get_suggest = `${baseUrl}${basePath}/suggest/:id`;

export const post_admin_suggest_product = `${baseUrl}${basePath}/admin/suggest/product`;
export const put_admin_suggest = `${baseUrl}${basePath}/admin/suggest`;
export const put_admin_suggest_product = `${baseUrl}${basePath}/admin/suggest/product`;
export const get_admin_suggest = `${baseUrl}${basePath}/admin/suggest`;
export const get_admin_orders = `${baseUrl}${basePath}/admin/orders`;
export const get_admin_order = `${baseUrl}/api/admin/order/:id`;
export const put_admin_order = `${baseUrl}/api/admin/order/:id`;
export const get_admin_inquiries = `${baseUrl}${basePath}/admin/inquiries`;
export const put_admin_order_status = `${baseUrl}${basePath}/admin/order`;

export const post_linepay_confirm = `${baseUrl}${basePath}/linepay/confirm`;
export const get_linepay_callback = `${baseUrl}/api/account/linecallback`;
