import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/conita",
    assetPrefix: "/conita/",
    trailingSlash: true,
};

export default nextConfig;
