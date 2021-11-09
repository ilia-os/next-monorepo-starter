import * as React from 'react'
import type { NextPage } from 'next'
import { useTranslation } from '@hooks'
import { GetStaticProps } from '@typings'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { titleTemplate } from '@constants'
import { ErrorBoundary, MainShell, NextSeo, Container, Image } from '@components'

export type THomePageProps = {}

const Home: NextPage<THomePageProps> = () => {
  const { t } = useTranslation(['common'])

  return (
    <ErrorBoundary>
      <NextSeo title={t('common:home')} titleTemplate={titleTemplate} />
      <MainShell>
        <Container>
          <div>
            <Image src='/images/turtle.webp' alt='turtle' width='1279' height='494' layout='responsive'/>
          </div>
          {t('common:Hello world')}
        </Container>
      </MainShell>
    </ErrorBoundary>
  )
}

export const getStaticProps: GetStaticProps<THomePageProps> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['common'])),
    },
    revalidate: false, // false or number in seconds.
  }
}

export default Home
