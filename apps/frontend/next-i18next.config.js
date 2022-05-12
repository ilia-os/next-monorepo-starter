const HttpBackend = require('i18next-http-backend/cjs')

const baseI18nConfig = {
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
		nsSeparator: ':',
		keySeparator: '.',
	},
	use: typeof window === 'undefined' ? [] : [HttpBackend],
}

module.exports = baseI18nConfig
