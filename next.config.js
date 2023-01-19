/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

const config = {
  experimental: {
    appDir: true,
  },
};

const nextConfig = withPWA({
  dest: 'public'
})(
  config
);

module.exports = nextConfig;
