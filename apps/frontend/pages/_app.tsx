import '@css/globals.scss'
import '@css/reset.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ToastProvider } from 'react-toast-notifications'
import NextProgressBar from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextProgressBar color="#ED1C24" options={{ showSpinner: false }} />
			<ToastProvider autoDismiss portalTargetSelector="#modal" placement="top-right">
				<Component {...pageProps} />
			</ToastProvider>
		</>
	)
}
export default appWithTranslation(MyApp)
