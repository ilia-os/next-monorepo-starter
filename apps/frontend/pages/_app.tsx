import React from 'react'
import '@css/globals.scss'
import '@css/reset.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NextProgressBar from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgressBar color="#ED1C24" options={{ showSpinner: false }} />
      <Component {...pageProps} />
      <div id="modal" />
      <Toaster/>
    </>
  )
}
export default appWithTranslation(MyApp)
