/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{hostname: 'placehold.co'},
			{hostname: 'orange-basic-bandicoot-201.mypinata.cloud'}
		],
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(graphql|gql)/,
			exclude: /node_modules/,
			loader: "graphql-tag/loader"
		})

		return config
	}
};

export default nextConfig;
