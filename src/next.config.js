/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	reactStrictMode: true,
	// route추가시 되살리기
	// assetPrefix: isProd
	// 	? "https://cdn.statically.io/gh/seungwooj/seungwooj.github.io/"
	// 	: "",
	images: {
		loader: "akamai",
		path: "",
	},
};

module.exports = nextConfig;
