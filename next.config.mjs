/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "github.com"},
            {hostname: "unsplash.com"}
        ]
    }
};

export default nextConfig;
