/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.postimg.cc" }], // Replace with your actual image hosting domain
  },
};

export default nextConfig;
