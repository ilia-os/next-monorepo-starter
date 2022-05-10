import * as React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps, NextPage } from '@types'
import { NextSeo, Link } from '@components'
import { useTranslation } from '@hooks'

export type TExamplePageProps = {}

/**  */
const ExamplePage: NextPage<TExamplePageProps> = ({}) => {
	const { t } = useTranslation(['common'])

	return (
		<>
			<NextSeo title={t('common:pages.example.title')} />
			<div>ExamplePage</div>
			<br />
			<Link href="/">
				<a>GO TO MAIN</a>
			</Link>
		</>
	)
}

export const getStaticProps: GetStaticProps<TExamplePageProps> = async ({
	locale,
}) => {
	return {
		props: {
			...(await serverSideTranslations(String(locale), ['common'])),
		},
		revalidate: false,
	}
}

export default ExamplePage
