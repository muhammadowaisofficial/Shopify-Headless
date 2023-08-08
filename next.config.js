/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== 'development',
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },

    images: {
        domains: ["cdn.shopify.com"],
    },
    env: {
        //NEXT_PUBLIC_STOREFRONT_ID: process.env.NEXT_PUBLIC_STOREFRONT_ID,
        NEXT_PUBLIC_STOREFRONT_TOKEN: process.env.NEXT_PUBLIC_STOREFRONT_TOKEN,
        NEXT_PUBLIC_STOREFRONT_DOMAIN: process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN,
        NEXT_PUBLIC_STOREFRONT_VERSION: process.env.NEXT_PUBLIC_STOREFRONT_VERSION,
    },
}

module.exports = nextConfig

// const withPWA = require("@ducanh2912/next-pwa").default({
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     //runtimeCaching,
//     disable: process.env.NODE_ENV === 'development',
//   });
  
  
   
//   module.exports = withPWA(nextConfig);
  
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
//   });
  
//   module.exports = withBundleAnalyzer(nextConfig)