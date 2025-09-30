import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// experimental: { typedRoutes: true },
	images: {
		remotePatterns: [
			{ hostname: "https://lh3.googleusercontent.com" },
			{ hostname: "avatars.githubusercontent.com" },
			{ hostname: "files.edgestore.dev" },
		],
	},
};

export default nextConfig;
