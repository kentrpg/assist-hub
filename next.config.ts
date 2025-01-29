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
        destination: "/admin/order",
        permanent: true,
      },
      // 未登入用戶訪問需要驗證的頁面
      {
        // 排除 /cart/checkout/confirm 路徑驗證
        source: "/cart(/(?!checkout/confirm)[^/]*)*",
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
        destination: "/admin/order",
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
