/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'letbefound-strapi.up.railway.app',
          },
        ],
      },
};

module.exports = nextConfig;
