import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MonorepoPromo } from '@components'

export type THomePageProps = {}

const Home: NextPage<THomePageProps> = () => {
	return <MonorepoPromo />
}

export const getStaticProps: GetStaticProps<THomePageProps> = async ({
	locale,
}) => {
	return {
		props: {
			...(await serverSideTranslations(String(locale), ['common'])),
		},
		revalidate: false,
	}
}

export default Home
