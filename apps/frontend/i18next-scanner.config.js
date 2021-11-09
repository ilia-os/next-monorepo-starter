const path = require('path')
const i18nextConfig = require('./next-i18next.config')

// Put available namespaces here.
const namespaces = ['common']

// The key of translation must be written in English, like t('namespace:User name')
const defaultTranslationLanguage = 'en'

module.exports = {
	src: ['./pages', './src'],
	dest: path.resolve(__dirname),
	options: {
		// debug: true,
		func: {
			list: ['i18next.t', 'i18n.t', 't'],
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		},
		trans: {
			component: 'Trans',
			i18nKey: 'i18nKey',
			defaultsKey: 'defaults',
			extensions: [],
		},
		lngs: i18nextConfig.i18n.locales,
		defaultLng: defaultTranslationLanguage,
		ns: namespaces,
		defaultNs: 'common',
		defaultValue: (lng, ns, key) => (lng === defaultTranslationLanguage ? key : '____NOT_TRANSLATED____'),
		resource: {
			loadPath: 'public/locales/{{lng}}/{{ns}}.json',
			savePath: 'public/locales/{{lng}}/{{ns}}.json',
			jsonIndent: 2,
			lineEnding: '\n',
		},
		nsSeparator: ':',
		keySeparator: false,
		interpolation: {
			prefix: '{{',
			suffix: '}}',
		},
	},
}
