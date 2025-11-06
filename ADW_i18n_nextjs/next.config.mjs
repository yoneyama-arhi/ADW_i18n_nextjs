/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ja', 'zh'],
    defaultLocale: 'en',
    localeDetection: false, // ←自動検出は使わない
  },
  reactStrictMode: true,
};
export default nextConfig;
