import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'

/* Enables the use of i18n HMR in dev mode */
export const useI18nHMR = (): void => {
	const { i18n } = useTranslation()

	if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
		import('i18next-hmr/server').then(({ applyServerHMR }) => {
			applyServerHMR(i18n)
		})
	}

	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
			import('i18next-hmr/client').then(({ applyClientHMR }) => {
				applyClientHMR(i18n)
			})
		}
	}, [i18n])
}
