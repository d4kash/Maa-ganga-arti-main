/** @type {import('next').NextConfig} */
const nextConfig = {};
// const path = require('path');
// next.config.js
module.exports = {
  output: 'export', // Enables static export
  // distDir: 'build', // Custom output directory for static files
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ganga-arti.s3.ap-south-1.amazonaws.com',
        pathname: '/**', // Matches all paths
      },
    ],
  },
  // images: {
  //   domains: [
  //     "eastindiantraveller.com",
  //     "media.istockphoto.com",
  //     "encrypted-tbn0.gstatic.com",
  //     "img.youtube.com",
  //     "www.tripsavvy.com",
  //     "ganga-arti.s3.ap-south-1.amazonaws.com"
  //   ],
  // },
};
