/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/user", // 匹配 /user路徑
        destination: "/user/profile", // 重導向到 /user/profile
        permanent: false, // 使用 302 重導向，此頁面不被搜尋到
      },
    ];
  },
};

export default nextConfig;
