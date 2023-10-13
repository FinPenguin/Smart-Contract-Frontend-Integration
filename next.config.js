/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["gaurang-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"],
    // domains: ["gaurang-nft-marketplace.infura-ipfs.io"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
