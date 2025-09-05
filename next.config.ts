import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
      @use "_variables.scss" as *;
      @use "_functions.scss" as *;
      @use "_fonts.scss" as *;
      @use "_icons.scss" as *;
    `,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ntvb.tmsimg.com',
      },
    ],
  },
};

export default nextConfig;
