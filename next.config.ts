// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',

  // Optional: basePath if you're deploying to a subdirectory (e.g., GitHub Pages)
  // basePath: '/your-subdirectory',

  // Optional: enable strict mode
  reactStrictMode: true,

  // Optional: if you're using images with next/image and static export
  images: {
    unoptimized: true,
  },

  // Optional: if you're using Tailwind or need future Webpack settings
  // webpack: (config) => {
  //   // custom Webpack configuration
  //   return config;
  // },
};

module.exports = nextConfig;
