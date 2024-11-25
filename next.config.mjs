/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "github.com"},
            {hostname: "images.unsplash.com"},
            {hostname: "lh3.googleusercontent.com"},
            {hostname: "res.cloudinary.com"}
        ]
    }
};

export default nextConfig;
