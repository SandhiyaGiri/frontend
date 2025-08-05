/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  serverExternalPackages: ['@ag-ui/agno'],
  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'http://backend:8000'
  }
};

module.exports = nextConfig; 