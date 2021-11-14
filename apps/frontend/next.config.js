/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')
const path = require('path')
const withTM = require('next-transpile-modules')([])

const nextConfig = {
  webpack(wpConfig, options) {
    wpConfig.resolve.alias['@components'] = path.join(__dirname, 'src/components')
    wpConfig.resolve.alias['@constants'] = path.join(__dirname, 'src/constants')
    wpConfig.resolve.alias['@helpers'] = path.join(__dirname, 'src/helpers')
    wpConfig.resolve.alias['@typings'] = path.join(__dirname, 'src/typings')
    wpConfig.resolve.alias['@hooks'] = path.join(__dirname, 'src/hooks')
    wpConfig.resolve.alias['@icons'] = path.join(__dirname, 'src/icons')
    wpConfig.resolve.alias['@css'] = path.join(__dirname, 'src/css')

    /* Icons */
    wpConfig.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    })

    /* i18next scanner */
    if (!options.isServer && wpConfig.mode === 'development') {
      console.log('App started in dev mode')
      const i18nextWebpackPlugin = require('i18next-scanner-webpack')
      wpConfig.plugins.push(new i18nextWebpackPlugin(require('./i18next-scanner.config')))
    }

    return wpConfig
  },
  reactStrictMode: true,
  i18n,
}

module.exports = withTM(nextConfig)

