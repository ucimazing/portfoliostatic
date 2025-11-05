/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true }, // needed if you use next/image with static export
};
module.exports = nextConfig;