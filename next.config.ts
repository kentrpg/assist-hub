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
    ];
  },
};

export default nextConfig;
