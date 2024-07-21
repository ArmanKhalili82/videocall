/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "resolute-loris-733.convex.cloud"}
        ]
    }
};

export default nextConfig;
