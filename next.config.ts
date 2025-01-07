/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    // 在生產環境建置時忽略 ESLint 錯誤
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
