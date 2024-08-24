/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
    prependData: `@import "main.scss";`,
  },
};

export default nextConfig;
