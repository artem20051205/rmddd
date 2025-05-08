/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
  },
  output: 'export', // Ensure this is set for static export
};

module.exports = nextConfig;
