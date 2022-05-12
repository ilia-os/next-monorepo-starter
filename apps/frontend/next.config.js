const path = require('path')
const { i18n } = require('./next-i18next.config')
const { I18NextHMRPlugin } = require('i18next-hmr/plugin')

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
		outputFileTracingRoot: path.join(__dirname, '../../'),
	},
	sassOptions: {
		includePaths: [path.resolve(__dirname, 'src', 'css')],
		prependData: `@import "@css/variables.scss";`,
	},

	webpack(wpConfig, context) {
		wpConfig.resolve.alias['@components'] = path.join(
			__dirname,
			'src/components'
		)
		wpConfig.resolve.alias['@constants'] = path.join(__dirname, 'src/constants')
		wpConfig.resolve.alias['@helpers'] = path.join(__dirname, 'src/helpers')
		wpConfig.resolve.alias['@types'] = path.join(__dirname, 'src/typings')
		wpConfig.resolve.alias['@hooks'] = path.join(__dirname, 'src/hooks')
		wpConfig.resolve.alias['@icons'] = path.join(__dirname, 'src/icons')
		wpConfig.resolve.alias['@css'] = path.join(__dirname, 'src/css')
		wpConfig.resolve.alias['@'] = path.join(__dirname, 'src')

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
			const localesDir = path.resolve('public/locales')
			wpConfig.plugins.push(new I18NextHMRPlugin({ localesDir }))
		}

		return wpConfig
	},
}

const withBundleAnalyzerConfig = withBundleAnalyzer(baseConfig)

module.exports = withBundleAnalyzerConfig
