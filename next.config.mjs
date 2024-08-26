/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  images: {
    domains: ["imgur.com", "i.imgur.com"],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
    prependData: `@import "main.scss";`,
  },
};

export default nextConfig;
