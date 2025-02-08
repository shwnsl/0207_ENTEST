/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "image1.lottetour.com"
          },
          {
            protocol: "https",
            hostname: "smallstartour.com"
          },
          {
            protocol: "https",
            hostname: "www.kayak.co.kr"
          },
          {
            protocol: "https",
            hostname: "dimg.donga.com"
          },
        ],
    },
};

export default nextConfig;
