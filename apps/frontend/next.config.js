const { join, resolve } = require('path')
const { i18n } = require('./next-i18next.config')

const withBundleAnalyzer =
	process.env.ANALYZE === 'true'
		? require('@next/bundle-analyzer')()
		: (config) => config

/** @type {import('next').NextConfig} */
const baseConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,
	experimental: {
		outputStandalone: true,
		outputFileTracingRoot: join(__dirname, '../../'),
	},
	sassOptions: {
		includePaths: [resolve(__dirname, 'src', 'css')],
		prependData: `@import "@css/variables.scss";`,
	},

	webpack(wpConfig, context) {
		wpConfig.resolve.alias['@components'] = join(__dirname, 'src/components')
		wpConfig.resolve.alias['@constants'] = join(__dirname, 'src/constants')
		wpConfig.resolve.alias['@helpers'] = join(__dirname, 'src/helpers')
		wpConfig.resolve.alias['@types'] = join(__dirname, 'src/typings')
		wpConfig.resolve.alias['@hooks'] = join(__dirname, 'src/hooks')
		wpConfig.resolve.alias['@icons'] = join(__dirname, 'src/icons')
		wpConfig.resolve.alias['@css'] = join(__dirname, 'src/css')
		wpConfig.resolve.alias['@'] = join(__dirname, 'src')

		/* Icons */
		wpConfig.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'removeViewBox',
									active: false,
								},
							],
						},
					},
				},
			],
		})

		/* Dev */
		if (!context.isServer && context.dev) {
			console.log('Running development webpack..')

			/* i18next-hmr */
			const localesDir = resolve('public/locales')
			const { I18NextHMRPlugin } = require('i18next-hmr/plugin')
			wpConfig.plugins.push(new I18NextHMRPlugin({ localesDir }))
		}

		return wpConfig
	},
}

const withBundleAnalyzerConfig = withBundleAnalyzer(baseConfig)

module.exports = withBundleAnalyzerConfig
