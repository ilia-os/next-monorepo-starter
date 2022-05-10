import '@css/globals.scss'
import '@css/reset.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { AppLayout, ErrorBoundary } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ErrorBoundary>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ErrorBoundary>
	)
}

export default appWithTranslation(MyApp)
