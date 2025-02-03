/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // base path redirect
      {
        source: "/user",
        destination: "/user/profile",
        permanent: true,
      },
      {
        source: "/auth",
        destination: "/auth/signin",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/admin/orders",
        permanent: true,
      },
      // 未登入用戶訪問需要驗證的頁面
      // 排除 /cart/checkout/confirm 路徑驗證
      {
        source: "/cart/checkout/:path((?!confirm$).*)",
        destination: "/auth/signin",
        permanent: false,
        missing: [
          {
            type: "cookie",
            key: "token"
          },
        ]
      },
      {
        source: "/:path(user|admin)/:slug*",
        destination: "/auth/signin",
        permanent: false,
        missing: [
          {
            type: "cookie",
            key: "token"
          },
          {
            type: "cookie",
            key: "identity"
          }
        ]
      },
      // 非管理員訪問管理員頁面
      {
        source: "/admin/:path*",
        destination: "/user/profile",
        permanent: false,
        has: [
          {
            type: "cookie",
            key: "identity",
            value: "(?!admin).*"
          }
        ]
      },
      // 驗證 admin/order/[id] 路徑，正規表達式過濾 id 為數字
      {
        source: "/admin/order/:id((?![0-9]+$).*)",
        destination: "/404",
        permanent: false
      },
      // 已登入用戶訪問登入頁面
      {
        source: "/auth/signin",
        has: [
          {
            type: "cookie",
            key: "token"
          },
          {
            type: "cookie",
            key: "identity",
            value: "admin"
          }
        ],
        destination: "/admin/orders",
        permanent: false,
      },
      {
        source: "/auth/signin",
        has: [
          {
            type: "cookie",
            key: "token"
          },
          {
            type: "cookie",
            key: "identity",
            value: "user"
          }
        ],
        destination: "/user/profile",
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
