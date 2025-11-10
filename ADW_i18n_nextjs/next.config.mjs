/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.ndi.com' },
      { protocol: 'https', hostname: 'images.ndi.com' },
      // { protocol: 'https', hostname: 'cdn.your-asset-host.com' }, // 追加があれば
    ],
  },
};
export default nextConfig;
