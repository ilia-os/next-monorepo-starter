import '@css/globals.scss'
import '@css/reset.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { AppLayout, ErrorBoundary } from '@components'
import { useI18nHMR } from '@/hooks/useI18nHMR'
import i18nextConfig from '../next-i18next.config'

function MyApp({ Component, pageProps }: AppProps) {
	useI18nHMR()

	return (
		<ErrorBoundary>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ErrorBoundary>
	)
}

export default appWithTranslation(MyApp, i18nextConfig)
