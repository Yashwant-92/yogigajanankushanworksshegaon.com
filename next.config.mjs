/** @type {import('next').NextConfig} */

const nextConfig = {
	turbopack: {},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	allowedDevOrigins: ["*.theopenbuilder.com", "*.yogigajanankushanworksshegaon.com"],
	// For Netlify static hosting
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true
	}
};

export default nextConfig;
